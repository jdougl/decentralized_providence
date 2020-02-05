import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

import { MatSnackBar } from '@angular/material';

import { BugsService } from '../../bugs.service';
import { Bug } from '../../models/bug.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  bug: any = {};
  updateForm: FormGroup;

  constructor(private bugService: BugsService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.bugService.getBugById(this.id).subscribe(res => {
        this.bug = res;
        this.updateForm.get('ticketNumber').setValue(this.bug.ticketNumber);
        this.updateForm.get('ticketType').setValue(this.bug.ticketType);
        this.updateForm.get('bugFinder').setValue(this.bug.bugFinder);
        this.updateForm.get('bugDescription').setValue(this.bug.bugDescription);
        this.updateForm.get('assignedDeveloper').setValue(this.bug.assignedDeveloper);
        this.updateForm.get('priority').setValue(this.bug.priority);
        this.updateForm.get('status').setValue(this.bug.status);
        this.updateForm.get('ticketDate').setValue(this.bug.ticketDate);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      ticketNumber: '',
      ticketType: '',
      bugFinder: '',
      bugDescription: '',
      assignedDeveloper: '',
      priority: '',
      status: '',
      ticketDate: '',
    });
  }

   updateBug(ticketNumber, ticketType, bugDescription, bugFinder, assignedDev, priority, status) {
    const newBugTicket = {
      ticketNumber: ticketNumber,
      ticketType: ticketType,
      bugDescription: bugDescription,
      bugFinder: bugFinder,
      assignedDev: assignedDev,
      priority: priority,
      status: status,
      ticketDate: firebase.firestore.FieldValue.serverTimestamp()
    };

    this.bugService.updateBug(this.id, newBugTicket);

    console.log("Bug Updated");

    alert("Bug Updated");

    this.router.navigate(['/list']);
  }

  


}