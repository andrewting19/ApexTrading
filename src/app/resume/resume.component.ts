import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgUrl(img) {
    return environment.assetPath + img;
  }

  gDocsEmbedUrl(pdfUrl) {
    return 'https://drive.google.com/file/d/' + pdfUrl + '/preview';
  }

}
