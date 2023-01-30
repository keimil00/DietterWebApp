import { Component, OnInit } from '@angular/core';
import {MealListItem, MealResponse} from "../create/create.model";
import {CreateService} from "../create/create.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: MealListItem[] = [];

  constructor(private service: CreateService) { }

  ngOnInit(): void {
    this.service.getMeals().subscribe((meals: MealListItem[]) => {
      this.meals = meals;
    })
  }

}
