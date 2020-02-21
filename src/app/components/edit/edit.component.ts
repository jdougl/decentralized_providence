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

  constructor(private issueService: IssuesService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('issueCategory').setValue(this.issue.issueCategory);
        this.updateForm.get('issueDescription').setValue(this.issue.issueDescription);
        this.updateForm.get('issueEndDate').setValue(this.issue.issueEndDate);
        this.updateForm.get('issueNumber').setValue(this.issue.issueNumber);
        this.updateForm.get('issueStartDate').setValue(this.issue.issueStartDate);
        this.updateForm.get('numVotes').setValue(this.issue.numVotes);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      issueCategory: '',
      issueDescription: '',
      issueEndDate: '',
      issueNumber: '',
      issueStartDate: '',
      numVotes: '',
      status: ''
    });
  }

   updateIssue(issueCategory, issueDescription, issueEndDate, issueNumber, issueStartDate, numVotes, status) {
    const newIssueTicket = {
      issueCategory: issueCategory,
      issueDescription: issueDescription,
      issueEndDate: issueEndDate,
      issueNumber: issueNumber,
      issueStartDate: issueStartDate,
      numVotes: numVotes,
      status: status,
    };

    this.issueService.updateIssue(this.id, newIssueTicket);

    console.log("Issue Updated");

    alert("Issue Updated");

    this.router.navigate(['/list']);
  }

  


}