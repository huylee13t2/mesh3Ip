import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  loading: boolean = false;
  user: any;
  _error : string;

  constructor(private authService : AuthService, private router : Router) { 
    this.loading = true;
    this.authService.getCurrentUser().then(user => {
      this.loading = false;
      this.user = user;
      if(user.emailVerified){
        this.router.navigate(['/login']);
      }
    }).catch(() => {
      this.loading = false;
      this.router.navigate(['/login']);
    })
  }

  ngOnInit() {
  }

  sendEmail() {
    this.loading = true;
    this._error = '';
    this.user.sendEmailVerification().then(res => {
      this._error = 'success';
      this.loading = false; 
    }, () => {
      this.loading = false;
      this._error = 'failed';
    });
  }

}
