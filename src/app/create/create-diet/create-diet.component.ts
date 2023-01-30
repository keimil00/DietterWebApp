import { Component, OnInit } from '@angular/core';
import {Diet} from "../create.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {

  dietForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    diet_length: new FormControl(0),
    is_public: new FormControl(''),
    diet_days: new FormControl([])
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDays() {
    this.router.navigateByUrl('/create-diet-days', { state: this.dietForm.value });  }
}
