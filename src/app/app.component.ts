import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dietter';

  isLoggedIn = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
