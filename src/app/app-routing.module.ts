import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarComponent } from './car/car.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component: DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'wish',component:WishComponent},
    {path:'cart',component:CartComponent},
    {path:'grade',component:GradeComponent},
    {path:'car',component:CarComponent},
    {path:'phones',component:PhonesComponent},
    {path:'users',component:UsersComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'images',component:ImagesComponent},
    {path:'products',component:ProductsComponent},
    {path:'accounts',component:AccountsComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
