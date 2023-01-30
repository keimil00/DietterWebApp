import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DietComponent} from "./diet/diet.component";
import {MealComponent} from "./meal/meal.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'diet', component: DietComponent },
  { path: 'meal', component: MealComponent },
  { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
