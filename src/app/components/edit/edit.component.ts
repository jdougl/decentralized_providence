import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

import { MatSnackBar } from '@angular/material';

import { IssuesService } from '../../issues.service';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  newIssueStartDate;
  newIssueEndDate;

  constructor(private issueService: IssuesService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('issueNumber').setValue(this.issue.issueNumber);
        this.updateForm.get('issueCategory').setValue(this.issue.issueCategory);
        this.updateForm.get('issueDescription').setValue(this.issue.issueDescription);
        this.updateForm.get('issueEndDate').setValue(this.issue.issueEndDate);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      issueNumber: [{value:this.issue.issueNumber, disabled:true}],
      issueCategory: this.issue.issueCategory,
      issueDescription: this.issue.issueDescription,
      issueEndDate: this.issue.issueEndDate,
      status: this.issue.status,
    });
  }

   updateIssue(issueCategory, issueDescription, status) {
    
    //makes sure values are defined, this gets rid of an error on some values if they are unchanged.
    if (typeof issueCategory == 'undefined') {
      issueCategory = this.issue.issueCategory;
    }
    if (typeof issueDescription == 'undefined') {
      issueCategory = this.issue.issueDescription;
    }
    if (typeof status == 'undefined') {
      issueCategory = this.issue.status;
    }

    const newIssueTicket = {
      issueNumber: this.issue.issueNumber,
      issueCategory: issueCategory,
      issueDescription: issueDescription,
      issueStartDate: this.issue.issueStartDate,
      issueEndDate: this.newIssueEndDate,
      status: status,
      numVotes: this.issue.numVotes
    };

    this.issueService.updateIssue(this.id, newIssueTicket);

    console.log("Issue Updated");

    alert("Issue Updated");

    this.router.navigate(['/list']);
  }

    setNewStartDate(minDate) {
      this.newIssueStartDate = minDate.toISOString();
    }

    //sets end date on change event from end date datepicker
    setNewEndDate(maxDate) {
      this.newIssueEndDate = maxDate.toISOString();
    }

  


}