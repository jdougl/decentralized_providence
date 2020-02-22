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

   addIssue(issueNumber, issueCategory, issueDescription, issueStartDate, issueEndDate, numVotes, status) {
    	const issueTicket = {
        id: issueNumber,
        issueCategory: issueCategory,
        issueDescription: issueDescription,
        issueStartDate: issueStartDate,
        issueEndDate: issueEndDate,
        numVotes: 0,
        status: status,
    };

    this.issueService.addIssue(issueTicket);

    //repops issues early - this is just to dispel any concurrency issues
    this.issueService.repop();

    console.log("Issue written to backend DB");

    alert("Issue added");

    this.router.navigate(['/list']);
    
  	}

  ngOnInit() {
  }



}
