import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LangService } from 'src/app/services/lang/lang.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: FormGroup; 
  loading:boolean = false;
  _error : string;

  constructor(private fb : FormBuilder, private afAuth: AngularFireAuth, public lang : LangService, private router : Router) {

    this.user = this.fb.group({
      email: [
        '', [
          Validators.required,
          Validators.email
        ]
      ]
    });
 
    
  }

  get email() { return this.user.get('email') }
 
  ngOnInit() {
  }
 

  sendResetPassword(){
    this.loading = true; 
    this._error = null;
    this.afAuth.auth.sendPasswordResetEmail(this.user.value.email).then(() => { 
      this.loading = false;
      this._error = 'success';
      this.user.reset();
    }).catch(err => {
      this.loading = false; 
      this._error  = err.code;
    });
  }
}
