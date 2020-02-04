import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BugsService } from '../../bugs.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	createForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private bugService: BugsService) {
  	this.createForm = this.fb.group({
      ticketNumber: '',
      ticketType: '',
      bugDescription: '',
      bugFinder: '',
      assignedDeveloper: '',
      priority: '',
      status: '',
    });
   }

   addBug(ticketNumber, ticketType, bugDescription, bugFinder, assignedDev, priority, status) {
    	const bugTicket = {
      ticketNumber: ticketNumber,
      ticketType: ticketType,
      bugDescription: bugDescription,
      bugFinder: bugFinder,
      assignedDev: assignedDev,
      priority: priority,
      status: status,
      ticketDate: firebase.firestore.FieldValue.serverTimestamp()
    };

    this.bugService.addBug(bugTicket);

    //repops bug early - mainly just to avoid ticketDate getting flagged as not existing
    this.bugService.repop();

    console.log("Bug written to backend DB");

    alert("Bug added");

    this.router.navigate(['/list']);
    
  	}

  ngOnInit() {
  }



}
