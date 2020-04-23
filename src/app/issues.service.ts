// jdougl | S1625371
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Issue } from './models/issue.model';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class IssuesService {
	issuesCollection: AngularFirestoreCollection<Issue>;
	issues: Observable<Issue[]>

  constructor(private db: AngularFirestore) {
  	this.issuesCollection = db.collection<Issue>("issues");
  	this.repop();
   }

  //fetchs issues from firebase DB
  getIssues() {
    this.repop();
    return this.issues;
  }

  getIssueById(id) {
    return this.issuesCollection.doc(id).valueChanges();
  }

  //add issue to firebase DB
  addIssue(issueTicket) {
    this.issuesCollection.add(issueTicket);
  }

  //repopulates issues
  repop() {
    this.issues = this.issuesCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Issue;
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      })
    );
  }

  //deletes issue from backend
  deleteIssue(id) {
    this.issuesCollection.doc(id).delete();
  }

  //updates issue in backend
  updateIssue(id, newIssueTicket) {
    this.issuesCollection.doc(id).update(newIssueTicket);
  }

  //votefor to DB
  addVote(id, votedIssue, voteDirection) {
    
    //assigning the users that have voted on the issue and finding the current user ID
    var newVotedUids = votedIssue.votedUids;
    var currentUid = firebase.auth().currentUser.uid;

    //checking if the user has already voted, if it has it can't vote, if it hasn't add vote
    if(newVotedUids.hasOwnProperty(currentUid)) {
      console.log("User has already voted")
      alert("You have already voted on this issue")
    }

    //executes vote
    else {
      //add Uid to voted Uids
      newVotedUids[currentUid] = true;
      
      if(voteDirection == "true") {
        this.issuesCollection.doc(id).update({
          votesFor: firebase.firestore.FieldValue.increment(1),
          numVotes: firebase.firestore.FieldValue.increment(1),
          votedUids: newVotedUids
        })
      }
      else if(voteDirection == "false") {
        this.issuesCollection.doc(id).update({
          votesAgainst: firebase.firestore.FieldValue.increment(1),
          numVotes: firebase.firestore.FieldValue.increment(1),
          votedUids: newVotedUids
        })
      }
      }

    }
    
  }
