import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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

  images: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let images = [this.img6, this.img7, this.img8, this.img9, this.img10, this.img11, this.img12, this.img13, this.img14, this.img15, this.img16, this.img17];
    console.log(images);
    for (let i = 0; i < images.length; i ++) {
      console.log(images[i].nativeElement);
      this.images[i] = {
        'width' : images[i].nativeElement.naturalWidth,
        'height' : images[i].nativeElement.naturalHeight
      }
    }
    this.images = [0,0,0,0,0, ...this.images];
    console.log(this.images);
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

}
