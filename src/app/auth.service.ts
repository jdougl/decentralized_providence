import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  doLogin(email, password) {
     return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
  }

  //registers user in the firebase DB
  doRegister(email, password) {
     return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
  }

  doLogout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("User signed out");
    }, function(error) {
      // An error happened.
      console.log("Error signing out", error);
    });
  }

}

