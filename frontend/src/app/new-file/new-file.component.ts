import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../shared/api.service";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss']
})
export class NewFileComponent implements OnInit {

  newArticleForm: FormGroup;

  constructor(
      private apiService: ApiService,
      private authService: AuthService,
      private router: Router) {}

  ngOnInit() {
    this.newArticleForm = new FormGroup({
      title: new FormControl(null, []),
      content: new FormControl(null, [])
    });
  }

  onSubmitForm() {
    const title = this.newArticleForm.value.title;
    const content = this.newArticleForm.value.content;
    const shortContent = content.substr(0, 150);
    console.log(title, content);
    this.apiService.postNewDocument(title, content, shortContent).subscribe(
        (response: any) => {
          this.router.navigate(['/home']);
        }, (error1 => console.log(error1))
    );
  }

}
