import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Bug } from './models/bug.model';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BugsService {
	bugsCollection: AngularFirestoreCollection<Bug>;
	bugs: Observable<Bug[]>

  constructor(private db: AngularFirestore) {
  	this.bugsCollection = db.collection<Bug>("bugs");
  	this.repop();
   }

  //fetch bugs from firebase DB
  getBugs() {
    this.repop();
    return this.bugs;
  }

  getBugById(id) {
    return this.bugsCollection.doc(id).get();
  }

  //add issue to firebase DB
  addBug(bugTicket) {
    this.bugsCollection.add(bugTicket);
  }

  //repopulates bugs
  repop() {
    this.bugs = this.bugsCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Bug;
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      })
    );
  }

  //deletes issue from backend
  deleteBug(id) {
    this.bugsCollection.doc(id).delete();
  }

  updateBug(id, newBugTicket) {
    this.bugsCollection.doc(id).update(newBugTicket);
  }

}
