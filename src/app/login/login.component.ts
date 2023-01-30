import { Component, OnInit } from '@angular/core';
import {StorageService} from "../_shared/storage.service";
import {AuthService} from "../_shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        // this.storageService.saveUser(data);
        console.log('hi');
        console.log(data);
        localStorage.setItem('token', data.token);
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.reloadPage();
      },
      err => {
        console.log(err || 'Error');
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      },
      () => {
        console.log('complete');
      }
    );
  }

  reloadPage(): void {
    this.router.navigate(['home']);
  }

}

