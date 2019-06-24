import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  token: string = null;
  everythingWorkedOk = true;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
      this.apiService.postRegistrationAccountConfirmEmail(this.token).subscribe(
          (response: any) => {

          },
          (error1 => {
            this.everythingWorkedOk = false;
            console.log(error1);
          })
      );
    });
  }

}
