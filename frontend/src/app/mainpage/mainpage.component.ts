import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  listOfFiles = [];

  constructor(
      private router: Router,
      private apiService: ApiService,
      private authService: AuthService,
  ) {}

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.apiService.getDocuments().subscribe(
    (response: any) => {
        this.listOfFiles = [...response];
        console.log(response)
      }
    );
  }

  onClickAddNewFile() {
    this.router.navigate(['/new-file']);
  }

  onClickDelteFile(id: any) {
    this.apiService.deleteFile(id).subscribe(
        (response: any) => {
          this.ngOnInit();
        }
    );
  }
}
