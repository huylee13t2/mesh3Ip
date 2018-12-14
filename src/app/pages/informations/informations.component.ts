import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments-service/payments.service';

import { Payments } from 'src/app/interfaces/payments';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
 

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
 
  info:any = null;
  loading:boolean = true;
  _error:string;
  info_form:FormGroup;

  constructor(private paymentsService : PaymentsService, private fb: FormBuilder) { 

    this.info_form = this.fb.group({
      used_account: ['', Validators.required],
      accounts: this.fb.array([this.account()])
    });
 
    
  }
  
  get accounts() { return this.info_form.get('accounts') as FormArray; }
  account(id?, bank_name?, iban?, name?, number?, currency?, fees?) { 
    return this.fb.group({
      bank_name: [bank_name, [Validators.required]],
      iban: [iban, [Validators.required]],
      name: [name, [Validators.required]],
      number: [number, [Validators.required]],
      currency: [currency, [Validators.required]],
      fees: [fees, [Validators.required]],
      id:[id || this.generateCode]
    });
  }

  ngOnInit() {
    
    this.loading = true;
    this.paymentsService._info.snapshotChanges()
    .map(actions => {
      this.loading = false; 
      this.info    = null;
      return actions.map(a => {
         
        var id = a.payload.doc.id;
        this.info  = {id, ...a.payload.doc.data() as Payments};

        this.info_form.patchValue({used_account : this.info.used_account});

        this.removeAllAccounts();        
        for(let i in this.info.accounts){
          let account = this.info.accounts[i];
          this.accounts.push(this.account(account.id, account.bank_name, account.iban, account.name, account.number, account.currency, account.fees));
        }

      });
    })
    .subscribe();
  }

  save(){ 

    this._error = null;
    if(this.info_form.invalid){
      this._error = 'invalid';
      return;
    }
    
    var body = {...this.info_form.value};

    if(this.info){
      var used = body.used_account;
      body.used_account = '';
      for(var i in this.accounts.controls){
        var item = this.accounts.controls[i].value;
        if(item.id == used){
          body.used_account = item.id;
          break;
        }
      }
    }

    if(!body.used_account){
      this._error = 'account';
      return;
    }

    this.paymentsService.update((this.info ? this.info.id : null), body, (this.info ? true : false));
    this._error = 'success';
  }

  resetForm() {
    this.info_form.reset();
    let n = this.accounts.length;
    for (let i = 1; n > i; n--) {
      this.accounts.removeAt(i);
    }

  }

  removeAllAccounts(){
    let n = this.accounts.length;
    for (let i = 0; n > i; n--) {
      this.accounts.removeAt(i);
    }
    
  }
  
  addAccount(e) {
    e.preventDefault();
    if (this.accounts.controls.length >= 4) {
      return;
    }
    
    this.accounts.push(this.account());
  }


  deleteAccount(e, i) {
    e.preventDefault();
    if (this.accounts.controls.length <= 1) {
      return;
    }

    var c:any = this.accounts.controls[i];
    if(c.controls.id.value == this.info_form.get('used_account').value){
      this.info_form.patchValue({used_account : ''})
    }

    this.accounts.removeAt(i);
  }

  get generateCode(){
    return Math.random().toString(26).substring(2);
  }

}
