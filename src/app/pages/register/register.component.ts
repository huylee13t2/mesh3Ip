import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth-service.service';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang/lang.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: FormGroup;
  registered: boolean = false;
  user_res: any;
  loading: boolean = false;
  _error:string;


  constructor(private fb: FormBuilder,
    private authService: AuthService, 
    private lang: LangService,
    private router: Router
  ) {
 
    this.user = this.fb.group({
      name: [
        '', [
          Validators.required
        ]
      ],
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
      ],
      passwordConfirm: [
        '', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(24)
        ]
      ]
    });
 
  }

  get name() { return this.user.get('name') }
  get email() { return this.user.get('email') }
  get password() { return this.user.get('password') }
  get passwordConfirm() { return this.user.get('passwordConfirm') }

  ngOnInit() {

  }

  signUp() {
    this._error = null;
    if (this.password.value !== this.passwordConfirm.value) {
      this.passwordConfirm.setValue('');
      this.passwordConfirm.setErrors({ confirm: true });
      return;
    }
    this.loading = true;
    this.authService.doRegister(this.user.value)
      .then(res => {
        this.loading = false;
        this.router.navigate(['/email-verify']);
      }, err => {
        this._error = (this.lang.arabic[err.code] ? this.lang.arabic[err.code] : this.lang.arabic.opps_error);
        this.loading = false;
      })

  }


}
