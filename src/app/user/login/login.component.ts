import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newLogin = '';
  createNewLogin = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateNewLogin() {
    this.createNewLogin = 'Your new login is '+ this.newLogin;
    this.newLogin = '';
    setTimeout(() => {
      this.createNewLogin = ''
    }, 2000);
  }

}
