import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  loading: boolean = false;
  _error:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
 
    this.user = this.fb.group({
      email: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    })

  }

  get email() { return this.user.get('email') }
  get password() { return this.user.get('password') }

  ngOnInit() {
  }

  login() {

    this.loading = true;
    this._error = false;

    this.authService.doLogin(this.user.value)
      .then(res => {
        if (res.user.emailVerified) {
          localStorage.setItem("is_login", "true");
          this.authService.setLoginCookie(res.user);
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/email-verify']);
        }
        this.loading = false;
      }, err => {
        this._error = true;
        this.loading = false;
      })
  }

}
