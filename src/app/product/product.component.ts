import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _commonService: CommonService) { }
  add() {
    this._commonService.setValue();
  }

  ngOnInit(): void {
  }

}
