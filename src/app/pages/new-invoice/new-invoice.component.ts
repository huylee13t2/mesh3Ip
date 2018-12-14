import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BillingsService } from 'src/app/services/billings-service/billings.service';


@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {

  date: Date = new Date();
  billing: FormGroup;
  loading: boolean = false;
  desc_number:number = 420;
  _errors:string;
  _invalid_errors:string;
  dateSettings = {
    bigBanner: false,
    timePicker: true,
    format: 'dd-MM-yyyy'
  }
  last_item_id : string;

  constructor(private fb: FormBuilder, private billingsService : BillingsService) {
    
    this.billing = this.fb.group({
      date: [this.date.toString(), [Validators.required]
      ],
      company_email: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      company_name: [
        '', [Validators.required]
      ],
      products: this.fb.array([this.product])
    });

  }

  get products() { return this.billing.get('products') as FormArray; }
  get product() {
    return this.fb.group({
      description: [
        '', [Validators.required, Validators.maxLength(420)]
      ],
      quantity: [
        '', [Validators.required]
      ],
      price: [
        '', [Validators.required]
      ]
    });
  }
  
  ngOnInit() { 
    
    this.billingsService.getLastItem.valueChanges().subscribe(item => { 
      if(!item || !item.length){
        this.setNumber(0);
      }else{
        this.setNumber(item[0]._number);
      }
    })
  }
  
  setNumber(n){
    var number:any;
    var n:any = +n + 1;
    if(n < 10){
      number = '000';
    }else if(n < 100){
      number = '00';
    }else if(n < 1000){
      number = 0;
    }

    this.last_item_id = `${number}${n}`;
  }

  add() {
    this._errors = '';
    if (this.billing.invalid) {
      for(var i in this.billing.controls){
        var control = this.billing.controls[i];
        if(i == 'products'){
          for(var k in this.products.controls){
            var p:any = this.products.controls[k];
            for(var ii in p.controls){
              if(p.controls[ii].errors){
                this._invalid_errors = ii;
                break;
              }
            }
          }
          break;
        }
        if(control.errors){
          this._invalid_errors = i;
          break;
        }
      }
      this._errors = 'invalid';
      return;
    }
    var body = {...this.billing.value};
    if (!this.last_item_id) {
      this._errors = 'reload';
      return;
    }
    
    body._number = this.last_item_id;
    
    if(this.billingsService.add(body)){
      this._errors = 'success';
    }else{
      this._errors = 'failed';
    }
    this.resetForm();
  }

  resetForm() {
    this.billing.reset({
      date : this.date.toString()
    });
    let n = this.products.length;
    for (let i = 1; n > i; n--) {
      this.products.removeAt(i);
    }

  }

  addProduct(e) {
    e.preventDefault();
    if (this.products.controls.length >= 10) {
      return;
    }
    this.products.push(this.product)
  }


  deleteProduct(e, i) {
    e.preventDefault();
    if (this.products.controls.length <= 1) {
      return;
    }

    this.products.removeAt(i);
  }

  descCount(e){
    var l:number = e.target.value.length;
    var r:number = 420;
    if(l > r){
      e.preventDefault();
      return false;
    }
    this.desc_number = r - l;
  }
}
