import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public ap:number=0;
  public bp:number=0;

  catch(value:number){
    this.bp=value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
