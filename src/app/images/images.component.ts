import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  public images: any = [];

  constructor(private _imagesService: ImagesService) {
    _imagesService.getImages().subscribe(
      (data: any) => {
        this.images = data.data.memes;
      },
      (err : any) => {
        alert("Internal server error");
      }
    )
  }



}
