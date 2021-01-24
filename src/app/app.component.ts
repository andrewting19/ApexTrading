import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  displayContactForm = false;
  displayShiritori = false;
  displayHome = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.router.url)
  }

  tabChanged() {
    console.log(this.router.url)
  }

  checkRoute(url) {
    return this.router.url == url;
  }

  getRoute() {
    console.log(this.router.url)
    return this.router.url
  }
}
