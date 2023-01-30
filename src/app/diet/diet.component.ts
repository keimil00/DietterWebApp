import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CreateService} from "../create/create.service";
import {Diet, DietResponse} from "../create/create.model";

export interface DietRequirements {
  protein_min: number;
  protein_max: number;
  fat_min: number;
  fat_max: number;
  carb_min: number;
  carb_max: number;
  calories_min: number;
  calories_max: number;
  diet_length_min: number;
  diet_length_max: number;
  number_of_reviews_min: number;
  number_of_reviews_max: number;
  rating_min: number;
  rating_max: number;
}

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  dietForm = new FormGroup({
    protein_min: new FormControl(0),
    protein_max: new FormControl(0),
    fat_min: new FormControl(0),
    fat_max: new FormControl(0),
    carb_min: new FormControl(0),
    carb_max: new FormControl(0),
    calories_min: new FormControl(0),
    calories_max: new FormControl(0),
    diet_length_min: new FormControl(0),
    diet_length_max: new FormControl(0),
    number_of_reviews_min: new FormControl(0),
    number_of_reviews_max: new FormControl(0),
    rating_min: new FormControl(0),
    rating_max: new FormControl(0),
  });
  haveDiets: boolean = false;
  diets: DietResponse[] = [];

  constructor(private service: CreateService) { }

  getDiets() {
    this.service.getDiets(this.getRequirementsFromForm()).subscribe(
      data => {
        this.haveDiets = true;
        console.log(data);
        this.diets = data;
        console.log(this.diets);
      },
      error => {
        console.log(error);
      }
    );
  }

  getRequirementsFromForm() {
    const requirements: DietRequirements = {
      protein_min: this.dietForm.controls.protein_min.value!,
      protein_max: this.dietForm.controls.protein_max.value!,
      fat_min: this.dietForm.controls.fat_min.value!,
      fat_max: this.dietForm.controls.fat_max.value!,
      carb_min: this.dietForm.controls.carb_min.value!,
      carb_max: this.dietForm.controls.carb_max.value!,
      calories_min: this.dietForm.controls.calories_min.value!,
      calories_max: this.dietForm.controls.calories_max.value!,
      diet_length_min: this.dietForm.controls.diet_length_min.value!,
      diet_length_max: this.dietForm.controls.diet_length_max.value!,
      number_of_reviews_min: this.dietForm.controls.number_of_reviews_min.value!,
      number_of_reviews_max: this.dietForm.controls.number_of_reviews_max.value!,
      rating_min: this.dietForm.controls.rating_min.value!,
      rating_max: this.dietForm.controls.rating_max.value!,
    };
    return requirements;
  }

  ngOnInit(): void {
  }

}
