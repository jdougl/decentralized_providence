import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Bug } from '../../models/bug.model';
import { BugsService } from '../../bugs.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	bugs: Bug[];
	displayedColumns = ['ticketNumber', 'ticketType', 'bugFinder', 'bugDescription', 'assignedDeveloper', 'priority', 'status', 'ticketDate', 'actions'];
  

  constructor(private bugService: BugsService, private router: Router, private auth: AuthService) {
     this.fetchBugs();
   }

  ngOnInit() {
    this.fetchBugs();
  }

  
  fetchBugs() {
    this.bugService
    .getBugs()
    .subscribe((data: Bug[]) => {
      this.bugs = data;
      console.log('Data requested ... ');
    });
  }
  
  deleteBug(id) {
    this.bugService.deleteBug(id);
    alert("Bug Deleted");
  }

  editBug(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  //logs out user
  logoutUser() {
    this.auth.doLogout();
    this.router.navigate(['/login']);
  }
}
