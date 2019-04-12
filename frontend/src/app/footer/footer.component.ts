import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      'email-footer': new FormControl(null, [])
    });
  }


  onSubmitSubscribe() {
    console.log(this.subscribeForm);
    this.subscribeForm.reset();
  }
}
