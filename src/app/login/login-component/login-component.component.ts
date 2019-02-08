import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  h1: String;
  welcomeText: String;
  registerBtnText: String;

  constructor() {
    this.h1 = 'Welcome to the Biggest Social Network in the World';
    this.welcomeText = 'We are the best and biggest social network with 5 bilion active users all around the world. Share your thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!';
    this.registerBtnText = 'Register Now!';
  }

  ngOnInit() {
  }

}
