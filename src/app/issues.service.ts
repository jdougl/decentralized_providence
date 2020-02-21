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
    return this.issuesCollection.doc(id).get();
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

  updateIssue(id, newIssueTicket) {
    this.issuesCollection.doc(id).update(newIssueTicket);
  }

}
