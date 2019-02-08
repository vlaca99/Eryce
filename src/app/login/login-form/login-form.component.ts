import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  private user = {};
  showLogin: Boolean;
  showRegister: Boolean;
  loginHeader: String;
  registerHeader: String;
  nameLabel: String;
  emailLabel: String;
  passwordLabel: String;
  checkboxLabel: String;
  forgotPassword: String;
  loginBtnText: String;
  registerBtnText: String;
  facebookBtnText: String;
  twitterBtnText: String;
  registerInfo: String;

  constructor() {
    this.showLogin = true;
    this.showRegister = false;
    this.loginHeader = 'Login into your Account';
    this.registerHeader = 'Register your Acoount';
    this.nameLabel = 'Your Name';
    this.emailLabel = 'Your Email';
    this.passwordLabel = 'Your Password';
    this.checkboxLabel = 'Remember Me';
    this.forgotPassword = 'Forgot my Password';
    this.loginBtnText = 'Login';
    this.registerBtnText = 'Register';
    this.facebookBtnText = 'Login with Facebook';
    this.twitterBtnText = 'Login with Twitter';
    this.registerInfo = "Don't have an account? <a href='#' class='register-link'>Register now!</a> It's really simple and you can start enjoying all the benefits!"
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.inputFields();
  }

  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  showRegisterForm() {
    this.showLogin = false;
    this.showRegister = true;
  }

  inputFields() {
    var inputList = document.querySelectorAll('input:not([type="checkbox"])');
    console.log(inputList);
    inputList.forEach((input: HTMLElement) => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused')
      });
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
      });
    });
  }

}
