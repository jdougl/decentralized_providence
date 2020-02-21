import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../../issues.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	createForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private issueService: IssuesService) {
  	this.createForm = this.fb.group({
     issueCategory: '',
     issueDescription: '',
     issueEndDate: '',
     issueNumber: '',
     issueStartDate: '',
     numVotes: '',
     status: '',
    });
   }

   addBug(issueCategory, issueDescription, issueEndDate, issueNumber, issueStartDate, numVotes, status) {
    	const issueTicket = {
      issueCategory: issueCategory,
      issueDescription: issueDescription,
      issueEndDate: issueEndDate,
      issueNumber: issueNumber,
      issueStartDate: issueStartDate,
      numVotes: numVotes,
      status: status,
    };

    this.issueService.addIssue(issueTicket);

    //repops bug early - mainly just to avoid ticketDate getting flagged as not existing
    this.issueService.repop();

    console.log("Bug written to backend DB");

    alert("Bug added");

    this.router.navigate(['/list']);
    
  	}

  ngOnInit() {
  }



}
