// jdougl | S1625371 
import { Injectable } from '@angular/core';
import contract from 'truffle-contract';
import artifacts from '../../../build/contracts/Election.json'
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AccountAddr } from '.././models/account.model';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

declare let require: any;
const Web3 = require('web3');


declare let window: any;

@Injectable()
export class Web3Service {
  private web3: any;
  private accounts: string[];
  public ready = false;

  public accountsObservable = new Subject<string[]>();

  accountsAddrCollection: AngularFirestoreCollection<AccountAddr>;
  currentAccount: string;

  constructor(private db: AngularFirestore) {
      this.bootstrapWeb3();
      this.accountsAddrCollection = db.collection<AccountAddr>("accountAddrs");

  }

  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      console.log("Web3 Assigned...");
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    setInterval(() => this.refreshAccounts(), 5000);

    // assigns a Blockchain address to the currently signed in user if the current user does not have one
    var that = this
    setTimeout(function(){
      that.assignAddressToUser();
    }, 7000);

  }

  public async artifactsToContract(artifacts) {
    if (!this.web3) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;
      return await this.artifactsToContract(artifacts);
    }

    const contractAbstraction = contract(artifacts);
    contractAbstraction.setProvider(this.web3.currentProvider);
    return contractAbstraction;

  }

  private refreshAccounts() {
    this.web3.eth.getAccounts((err, accs) => {
      console.log('Refreshing accounts');
      if (err != null) {
        console.warn('There was an error fetching your accounts.');
        return;
      }

      // Get the initial account balance so it can be displayed.
      if (accs.length === 0) {
        console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
        return;
      }

      if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
        console.log('Observed new accounts');

        this.accountsObservable.next(accs);
        this.accounts = accs;

      }

      this.ready = true;
    });
  }

  // return blockchain addresses
  getAccounts() {
    return this.accountsObservable;
  }

  // adds account addr pair to firebase collection
  addAccountAddr(accountAddrTicket) {
    this.accountsAddrCollection.add(accountAddrTicket);
  }

  // quick function to assign a blockchain address to a user if the user does not have one
  assignAddressToUser() {
    var currentUid = firebase.auth().currentUser.uid;
    var doesExist;
    var collectionSize = 0;
    var that = this;

    // checking if account already has an address assigned
    this.accountsAddrCollection.valueChanges().forEach(accountItem => {
      collectionSize++;
      console.log(collectionSize);
      if(accountItem[0]['accUid'] == currentUid) {
        that.currentAccount = accountItem[0]['accAddress'];
        doesExist = true;

        console.log("User exists and has a tied address: " + accountItem[0]['accAddress'])
        }
        else {
          doesExist = false;
        }

      });

    // if user doesn't exist add to backend
    if(doesExist == false) {

        // make ticket
        const accAddrPairTicket = {
          accUid: currentUid,
          accAddress: this.accounts[collectionSize]
        }

        console.log("Added accountUID / Blockchain Address pair")

        // add accountUID accountADDR pair to the DB
        this.addAccountAddr(accAddrPairTicket)
    }
  }

  // get current account - address for signed in user
  getSignedInAddress() {
    return this.currentAccount;
  }

  // function to vote on election smart contract - local blockchain
  voteFor(id) {
    var myContractAbstraction = this.artifactsToContract; // get contract abstraction


    // this is how you vote on a proposal on local blockchain
    myContractAbstraction(artifacts).deployed().then(function(voteFor){

    });
  }

  // function to vote on election smart contract - local blockchain
  voteAgainst() {
    var myContractAbstraction = this.artifactsToContract; // get contract abstraction


    // this is how you vote on a proposal on local blockchain
    myContractAbstraction(artifacts).deployed().then(function(voteFor){

    });
  }

}
