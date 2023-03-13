import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-task1',
  templateUrl: './form-task1.component.html',
  styleUrls: ['./form-task1.component.css']
})
export class FormTask1Component {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    rating: new FormControl(),
    address: new FormGroup({
      state: new FormControl(),
      doNo: new FormControl(),
      mandal: new FormControl()
    }),
    type:new FormControl(),
    dayscholor:new FormControl(),
    residentiol:new FormControl()

  })
  public form1: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    address:new FormGroup({
      village:new FormControl(),
      dist:new FormControl()
    }),
    type:new FormControl(),
    dayscholor:new FormControl(),
    residentiol:new FormControl()

  })
  constructor() { }
  creat() {
    console.log(this.form);
  }
  creat1(){
console.log(this.form1);
  }


}
