import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private Auth: AuthService, private Router: Router) { }

  ngOnInit() {
  }

  tryRegister(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.Auth.doRegister(email, password)
      .then(res => {
      console.log(res);
      this.Router.navigate(['']);
    }, err => {
      console.log(err);
  		})
	}

}
