import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  openedImg: string = null;
  images = [
    'alert_result_2.12.png',
    'alert_result_2.5.png',
    'alert_result_1.29.png',
    'alert_result3.png',
    'alert_result2.png',
    'alert_result1.png'
  ]

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

  openModal(id: string, img: string) {
    this.openedImg = img;
    this.modalService.open(id, null);
  }

  closeModal(id: string) {
    this.modalService.close(id);                                                        
  }

}
