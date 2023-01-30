import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateDietDaysComponent } from './create-diet/create-diet-days/create-diet-days.component';
import { CreateDietTabsComponent } from './create-diet/create-diet-tabs/create-diet-tabs.component';
import { CreateDietTabComponent } from './create-diet/create-diet-tab/create-diet-tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import { CreatDietGridComponent } from './create-diet/creat-diet-grid/creat-diet-grid.component';
import {AppModule} from "../app.module";
import { CreatDietMealSelectComponent } from './create-diet/creat-diet-meal-select/creat-diet-meal-select.component';


@NgModule({
  declarations: [
    CreateDietComponent,
    CreateMealComponent,
    CreateDietDaysComponent,
    CreateDietTabsComponent,
    CreateDietTabComponent,
    CreatDietGridComponent,
    CreatDietMealSelectComponent
  ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        FormsModule,
    ]
})
export class CreateModule { }
