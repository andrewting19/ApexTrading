import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../environments/environment';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobileView: boolean = false;

  constructor(
    public breakpointObserver: BreakpointObserver, 
  ) {
  }

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
