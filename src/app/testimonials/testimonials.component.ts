import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  mobileView: boolean = false;
  col1 = [
    'clickbait4.png',
    'clickbait13.PNG',
    'clickbait9.png',
    'clickbait15.PNG',
    'clickbait8.png',
    'clickbait12.png',
    'clickbait11.png',
    'clickbait1.png'
  ];
  col2 = [
    'clickbait2.png',
    'clickbait6.png',
    'clickbait5.png',
    'clickbait14.PNG',
    'clickbait7.png',
    'clickbait10.png',
    'clickbait3.png'
  ];

  constructor(
    public breakpointObserver: BreakpointObserver, 
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    })
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

}
