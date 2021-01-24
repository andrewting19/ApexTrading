import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

}
