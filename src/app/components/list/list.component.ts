import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../models/issue.model';
import { IssuesService } from '../../issues.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	issues: Issue[];
	displayedColumns = ['issueCategory', 'issueDescription', 'issueEndDate', 'issueNumber', 'issueStartDate', 'numVotes', 'status'];
  

  constructor(private issueService: IssuesService, private router: Router, private auth: AuthService) {
     this.fetchIssues();
   }

  ngOnInit() {
    this.fetchIssues();
  }

  
  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
    });
  }
  
  deleteIssue(id) {
    this.issueService.deleteIssue(id);
    alert("Issue Deleted");
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  //logs out user
  logoutUser() {
    this.auth.doLogout();
    this.router.navigate(['/login']);
  }
}
