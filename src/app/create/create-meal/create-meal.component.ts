import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Ingredient, MealType, NutritionalValues, Unit} from "../create.model";
import {CreateService} from "../create.service";

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  mealForm = this.fb.group({
    name: new FormControl(''),
    ingredients: this.fb.array([
      new FormGroup({
        name: new FormControl(''),
        amount: new FormControl(0),
        unit: new FormControl(Unit['g'])
      })
    ]),
    nutritional_values: new FormGroup(
      {
        calories: new FormControl(0),
        proteins: new FormControl(0),
        fats: new FormControl(0),
        carbohydrates: new FormControl(0)
      }
    ),
    meal_type: new FormControl(MealType.breakfast),
    recipe: new FormControl('Nothing yet'),
  })
  units: string[] = Object.values(Unit);
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private service: CreateService) { }

  ngOnInit(): void {
  }


  createMeal() {
    const ingredients: Ingredient[] = this.mealForm.controls.ingredients.value.map((ingredient: any) => {
      return {
        name: ingredient.name,
        amount: ingredient.amount,
        unit: ingredient.unit
      }
    });
    const nutritional_values: NutritionalValues = {
      calories: this.mealForm.controls.nutritional_values.value.calories!,
      protein: this.mealForm.controls.nutritional_values.value.proteins!,
      fat: this.mealForm.controls.nutritional_values.value.fats!,
      carbohydrates: this.mealForm.controls.nutritional_values.value.carbohydrates!
    };
    this.service.createMeal({
      ingredients: ingredients,
      is_public: true,
      photo: null,
      meal_type: this.mealForm.controls.meal_type.value!,
      nutritional_values: nutritional_values,
      recipe: this.mealForm.controls.recipe.value!,
      name: this.mealForm.controls.name.value!
    }).subscribe(
      data => {
        console.log(data);
        this.isSuccess = true;
        window.location.reload();
      },
      error => console.log(error)
    );
  }


  addIngredient() {
    this.mealForm.controls.ingredients.push(new FormGroup({
      name: new FormControl(),
      amount: new FormControl(),
      unit: new FormControl(),
    }));
  }

}
