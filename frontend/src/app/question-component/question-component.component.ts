import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss']
})
export class QuestionComponentComponent implements OnInit {
  @Input() question: {
    response1,
    response2,
    response3,
    correct_response,
    question,
    pk
  };
  constructor() { }

  conditions = {
    response1: {
      clicked: false,
      correct: null,
      wrong: null,
    },
    response2: {
      clicked: false,
      correct: null,
      wrong: null,
    },
    response3: {
      clicked: false,
      correct: null,
      wrong: null,
    }
  };

  ngOnInit() {
  }

  markSelected(response: string) {
    switch (response) {
      case 'response1': {
        this.conditions.response1.clicked = true;
        this.conditions.response2.clicked = false;
        this.conditions.response3.clicked = false;
        break;
      }
      case 'response2': {
        this.conditions.response1.clicked = false;
        this.conditions.response2.clicked = true;
        this.conditions.response3.clicked = false;
        break;
      }
      case 'response3': {
        this.conditions.response1.clicked = false;
        this.conditions.response2.clicked = false;
        this.conditions.response3.clicked = true;
        break;
      }
      default:
        return;
    }
  }

  onClickCheck() {
    switch (this.question.correct_response) {
      case this.question.response1: {
        this.conditions.response1.correct = true;
        if (this.conditions.response1.clicked) {
        }
        if (this.conditions.response2.clicked) {
          this.conditions.response2.wrong = true;
        }
        if (this.conditions.response3.clicked) {
          this.conditions.response3.wrong = true;
        }
        break;
      }
      case this.question.response2: {
        this.conditions.response2.correct = true;
        if (this.conditions.response1.clicked) {
          this.conditions.response1.wrong = true;
        }
        if (this.conditions.response2.clicked) {
        }
        if (this.conditions.response3.clicked) {
          this.conditions.response3.wrong = true;
        }
        break;
      }
      case this.question.response3: {
        this.conditions.response3.correct = true;
        if (this.conditions.response1.clicked) {
          this.conditions.response1.wrong = true;
        }
        if (this.conditions.response2.clicked) {
          this.conditions.response2.wrong = true;
        }
        if (this.conditions.response3.clicked) {
        }
        break;
      }
    }
  }
}
