import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import { DietComponent } from './diet/diet.component';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {httpInterceptorProviders} from "./_shared/auth.interceptor";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CreateModule} from "./create/create.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        DietComponent,
        MealComponent,
        ProfileComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterLinkActive,
        NgbModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CreateModule,
        ReactiveFormsModule,
    ],
    providers: [httpInterceptorProviders],
    exports: [
        MealComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
