import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-shiritori',
  templateUrl: './shiritori.component.html',
  styleUrls: ['./shiritori.component.css']
})
export class ShiritoriComponent implements OnInit {
  gameOver = false;
  words = [];
  scores = [];
  points = 0;
  nextLetter = "";
  error = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleDone(countdown) {
    console.log(countdown)
    if(countdown.action === "done") {
      console.log("Timer done. Game over.")
      this.gameOver = true;
      this.scores = [this.points, ...this.scores];
      this.scores.sort((a, b) => b - a);
    }
  }

  onEnter(word) {
    if(this.gameOver) {
      return;
    }
    if(this.nextLetter === "" || this.nextLetter === word.charAt(0)) {
      this.words = [word, ...this.words];
      this.nextLetter = word.charAt(word.length - 1);
      this.points += word.length > 3 ? word.length - 3 : 0;
      this.error = false;
    } else {
      this.error = true;
    }
  }

  onRestart() {
    this.gameOver = false;
    this.words = [];
    this.points = 0;
    this.nextLetter = "";
    this.error = false;
  }

}
