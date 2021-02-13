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
