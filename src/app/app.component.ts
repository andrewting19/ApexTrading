import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileView: boolean = false;

  constructor(
    public breakpointObserver: BreakpointObserver, 
    private router: Router) {
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    })
  }

  checkRoute(url) {
    return this.router.url == url;
  }

  getRoute() {
    return this.router.url
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }
}
