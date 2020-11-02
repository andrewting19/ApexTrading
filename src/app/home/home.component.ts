import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('img1', {static: true}) img1: ElementRef;
  @ViewChild('img2', {static: true}) img2: ElementRef;
  @ViewChild('img3', {static: true}) img3: ElementRef;
  @ViewChild('img4', {static: true}) img4: ElementRef;

  numImgs = 4;
  images: any[] = [];


  constructor() {
  }

  ngOnInit(): void {
    let images = [this.img1, this.img2, this.img3, this.img4];
    for (let i = 0; i < this.numImgs; i ++) {
      // console.log(images[i])
      this.images[i] = {
        'width' : images[i].nativeElement.naturalWidth,
        'height' : images[i].nativeElement.naturalHeight
      }
    }
    console.log(this.images);
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

}
