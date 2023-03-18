import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ActivitesComponent } from './activites/activites.component';
import { AuthenticationGuard } from './authentication.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarComponent } from './car/car.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { CreatUsersComponent } from './creat-users/creat-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormTask1Component } from './form-task1/form-task1.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { MailsComponent } from './mails/mails.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RangebarComponent } from './rangebar/rangebar.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { WishComponent } from './wish/wish.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      {path:'form-task1',component: FormTask1Component},
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'wish', component: WishComponent },
      { path: 'cart', component: CartComponent },
      { path: 'grade', component: GradeComponent },
      { path: 'car', component: CarComponent },
      { path: 'phones', component: PhonesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'mails', component: MailsComponent },
      { path: 'activites', component: ActivitesComponent },
      { path: 'creat-users', component: CreatUsersComponent },
      { path: 'creat-users/:id', component: CreatUsersComponent },
      { path: 'rangebar', component: RangebarComponent },
      { path: 'creat-student', component:CreatStudentComponent},
      {path:'user-details/:id', component:UserDetailsComponent},
      {path:'parent',component:ParentComponent},
      {path:'product',component:ProductComponent},
      {path:'nav',component:NavComponent},
      {path:'cartlist',component:CartlistComponent}
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
