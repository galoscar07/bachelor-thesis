import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  onClickAddNewFile() {
    this.router.navigate(['/new-file']);
  }
}
