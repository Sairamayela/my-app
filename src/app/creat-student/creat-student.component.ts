import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent {
  public creatStudent: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),

  })


  // Nested form

  public form1: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    city: new FormControl(),
    address: new FormGroup({
      state: new FormControl(),
      pin: new FormControl()
    }),

    // dynamic form


    type: new FormControl(),
    busFee: new FormControl(),
    hostalFee: new FormControl(),

    // Form Array
    
    cards: new FormArray([])

  })
  get cardsFormArray(){
    return this.form1.get('cards') as FormArray;
  }
  add (){
    this.cardsFormArray.push(
      new FormGroup(
        {
          number:new FormControl(),
          expairy:new FormControl(),
          cvv: new FormControl()
        }
      )
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  constructor() { }
  creat() {
    console.log(this.creatStudent);
  }
  submit() {
    console.log(this.form1);
  }


}
