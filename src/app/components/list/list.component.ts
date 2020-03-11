import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../models/issue.model';
import { IssuesService } from '../../issues.service';
import { AuthService } from '../../auth.service';
import { MatDialog } from '@angular/material';
import { VotedialogComponent } from './votedialog/votedialog.component';
import { Web3Service } from '../../util/web3.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	issues: Issue[];
	displayedColumns = ['issueCategory', 'issueDescription', 'issueEndDate', 'issueNumber', 'issueStartDate', 'numVotes', 'status', 'actions'];
  

  constructor(private issueService: IssuesService, private router: Router, private auth: AuthService, private dialog: MatDialog, private web3service: Web3Service) {
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

    this.fetchBlockchainAccounts();
  }

  fetchBlockchainAccounts() {
  }
  
  deleteIssue(id) {
    this.issueService.deleteIssue(id);
    alert("Issue Deleted");
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  //opens vote for or against modal
  openDialog(id) {
    let dialogRef = this.dialog.open(VotedialogComponent, {
      height: '200px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.vote(id, result);
    })
  }

  vote(id, voteDirection) {

    console.log(this.issues);

    var votedIssue;

    //finding issue with selected ID, adding vote to Firebase DB
    for (var i = 0; i < this.issues.length; i++) {
      if(this.issues[i].id == id) {
        this.issueService.addVote(id, this.issues[i], voteDirection);
      }
    }
  }

  //logs out user
  logoutUser() {
    this.auth.doLogout();
    this.router.navigate(['/login']);
  }
}
