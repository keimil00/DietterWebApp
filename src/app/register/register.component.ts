import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_shared/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    confirm_password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password } = this.form;
    console.log(this.form);

    this.authService.register(username,
      first_name,
      last_name,
      email,
      password,
      confirm_password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
