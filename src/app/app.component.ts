import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  displayContactForm = false;
  displayShiritori = false;

  handleClick() {
    this.displayContactForm = !this.displayContactForm;
  }

  contactButtonText() {
    return this.displayContactForm === true ? "Close" : "Contact Us";
  }

  contactButtonLink() {
    return this.displayContactForm === true ? "" : "contact";
  }

  handleShiritoriClick() {
    this.displayShiritori = !this.displayShiritori;
  }

  shiritoriButtonText() {
    return this.displayShiritori === true ? "Close" : "Play a game of shiritori";
  }

  shiritoriButtonLink() {
    return this.displayContactForm === true ? "" : "shiritori";
  }
}
