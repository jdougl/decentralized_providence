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

  //variables used for timestamps, doing this bcos working with timestamps passed as variables from matDatePicker is awkward
  issueStartDate;
  issueEndDate;

  constructor(private fb: FormBuilder, private router: Router, private issueService: IssuesService) {
  	this.createForm = this.fb.group({
     issueNumber: '',
     issueCategory: '',
     issueDescription: '',
     issueStartDate: '',
     issueEndDate: '',
     status: '',
    });
   }

   addIssue(issueNumber, issueCategory, issueDescription, status) {

      const issueTicket = {
        issueNumber: issueNumber,
        issueCategory: issueCategory,
        issueDescription: issueDescription,
        issueStartDate: this.issueStartDate,
        issueEndDate: this.issueEndDate,
        status: status,
        numVotes: 0
    };

    this.issueService.addIssue(issueTicket);

    //repops issues early - this is just to dispel any concurrency issues
    this.issueService.repop();

    console.log("Issue written to backend DB");

    alert("Issue added");

    this.router.navigate(['/list']);
    
  	}

    //sets start date each time the datepicker on the form is changed, listens for change events on datepicker
    setStartDate(minDate) {
      this.issueStartDate = minDate.toISOString();
    }

    //sets end date on change event from end date datepicker
    setEndDate(maxDate) {
      this.issueEndDate = maxDate.toISOString();
    }

  ngOnInit() {
  }



}
