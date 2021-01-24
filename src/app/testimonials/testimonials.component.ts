import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

}
