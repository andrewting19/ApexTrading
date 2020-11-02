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
  @ViewChild('img5', {static: true}) img5: ElementRef;
  @ViewChild('img6', {static: true}) img6: ElementRef;
  @ViewChild('img7', {static: true}) img7: ElementRef;
  @ViewChild('img8', {static: true}) img8: ElementRef;
  @ViewChild('img9', {static: true}) img9: ElementRef;
  @ViewChild('img10', {static: true}) img10: ElementRef;
  @ViewChild('img11', {static: true}) img11: ElementRef;
  @ViewChild('img12', {static: true}) img12: ElementRef;
  @ViewChild('img13', {static: true}) img13: ElementRef;
  @ViewChild('img14', {static: true}) img14: ElementRef;
  @ViewChild('img15', {static: true}) img15: ElementRef;
  @ViewChild('img16', {static: true}) img16: ElementRef;
  @ViewChild('img17', {static: true}) img17: ElementRef;


  numImgs = 9;
  images: any[] = [];


  constructor() {
  }

  ngOnInit(): void {
    let images = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6, this.img7, this.img8, this.img9, this.img10, this.img11, this.img12, this.img13, this.img14, this.img15, this.img16, this.img17];
    for (let i = 0; i < images.length; i ++) {
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
