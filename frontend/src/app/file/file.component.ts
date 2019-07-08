import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
    pageContent: {
        pk: 0;
        content: '';
        short_content: '';
        title: '';
        user: 0;
        questions: [];
    };
  title = '';
  content = '';
  questions = [
      {
          title: 'What provides symbolic identification for some memory locations?',
          answers: ['Data labels', 'Code labels', 'Labels'],
      },
      {
          title: 'Which are the 2 mnemonics categories?',
          answers: ['instructions names and directives names', 'Directives guide', 'Registers, constants']

      },
      {
          title: 'What is the offset',
          answers: ['a direct addressing operand', 'executable program structure', 'actual physical address ']
      },
  ];
  constructor(
      private apiService: ApiService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      if (!this.authService.isUserAuthenticated()) {
          this.router.navigate(['/']);
      }
      const userDocumentId = this.route.snapshot.paramMap.get('id');
      console.log(userDocumentId);
      this.apiService.getDocumentWithIdAndQuestions(userDocumentId.toString()).subscribe(
          (response: any) => {
                this.title = response.title;
                this.content = response.content;
                this.questions = [...response.questions];
                console.log(response);
          },
      error1 => {
          console.log(error1);
      }
      );
  }

}
