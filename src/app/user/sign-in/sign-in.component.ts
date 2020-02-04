import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private Auth: AuthService, private Router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
  	event.preventDefault()
  	const target = event.target
  	const email = target.querySelector('#email').value
  	const password = target.querySelector('#password').value

    this.Auth.doLogin(email, password)
      .then(res => {
      console.log(res);
      this.Auth.setLoggedIn(true);
      this.Router.navigate(['list']);
  }, err => {
      console.log(err);
      alert(err.message);
    })
  }

}
