import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { WishComponent } from './wish/wish.component';
import { CartComponent } from './cart/cart.component';
import { GradeComponent } from './grade/grade.component';
import { CarComponent } from './car/car.component';
import { PhonesComponent } from './phones/phones.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ImagesComponent } from './images/images.component';
import { ProductsComponent } from './products/products.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MailsComponent } from './mails/mails.component';
import { ActivitesComponent } from './activites/activites.component';
import { CreatUsersComponent } from './creat-users/creat-users.component';
import { RangebarComponent } from './rangebar/rangebar.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { FormTask1Component } from './form-task1/form-task1.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    RegistrationComponent,
    WishComponent,
    CartComponent,
    GradeComponent,
    CarComponent,
    PhonesComponent,
    UsersComponent,
    VehicleComponent,
    ImagesComponent,
    ProductsComponent,
    AccountsComponent,
    MailsComponent,
    ActivitesComponent,
    CreatUsersComponent,
    RangebarComponent,
    CreatStudentComponent,
    FormTask1Component,
    UserDetailsComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    NavComponent,
    CartlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
