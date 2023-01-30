import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateDietComponent} from "./create-diet/create-diet.component";
import {CreateMealComponent} from "./create-meal/create-meal.component";
import {CreateDietDaysComponent} from "./create-diet/create-diet-days/create-diet-days.component";

const routes: Routes = [
  { path: '',
    children: [
      { path: 'create-diet', component: CreateDietComponent },
      { path: 'create-diet-days', component: CreateDietDaysComponent },
      { path: 'create-meal', component: CreateMealComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
