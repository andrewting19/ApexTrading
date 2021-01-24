import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  checkRoute(url) {
    return this.router.url == url;
  }

  getRoute() {
    console.log(this.router.url)
    return this.router.url
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }
}
