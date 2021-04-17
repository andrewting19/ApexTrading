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
    'clickbait13.png',
    'clickbait9.png',
    'clickbait15.png',
    'clickbait8.png',
    'clickbait12.png',
    'clickbait11.png',
    'clickbait1.png',
    'clickbait16.png',
  ];
  col2 = [
    'clickbait2.png',
    'clickbait6.png',
    'clickbait5.png',
    'clickbait17.png',
    'clickbait14.png',
    'clickbait7.png',
    'clickbait10.png',
    'clickbait3.png',
    'clickbait18.png',
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
