import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Billing } from 'src/app/interfaces/billing';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { BillingsService } from 'src/app/services/billings-service/billings.service';
import { PaymentsService } from 'src/app/services/payments-service/payments.service';

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 

// import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  billings : Array<Billing> = [];
  billings_all : Array<Billing> = [];
  billing_details:any = {};
  loading : boolean = true;
  info : any = null;
  moreLoading : boolean = false;
  showShareLink : boolean = false;
  limit : number = 10;
  filter : string = 'all';
  total : number = 0;
  total_done : number = 0;
  total_waiting : number = 0;
  total_cancel : number = 0;
  fees:number = 0;


  constructor(private billingsService : BillingsService, private router: Router, private pay_info : PaymentsService) { 
    
  }

  get status() { return {'done' : 'مدفوع', 'waiting' : 'بانتظار الدفع', 'cancel' : 'ملغي'}; }

  ngOnInit() {

    this.billingsService.getBillings.snapshotChanges()
    .map(actions => {
      this.loading = false;
      this.initVars();
      return actions.map(a => {

        const data = a.payload.doc.data() as Billing; 
        const id   = a.payload.doc.id;

        const products = data.products;
        var total:any  = 0;

        for(let i in products){
          total = +total + (+products[i].price * +products[i].quantity); 
        }

        data.total = total;

        this.total += +data.total;

        if(data.status == 'done'){
          this.total_done += +data.total;
        }else if(data.status == 'waiting'){
          this.total_waiting += +data.total;
        }else if(data.status == 'cancel'){
          this.total_cancel += +data.total;
        }
        
        return {id, ...data};
      });
    })
    .subscribe(res => {
      this.billings_all = res;
      this.setFilter(this.filter);
    });

    this.getAccount();

  }

  initVars(){
    this.total = 0;
    this.total_done = 0;
    this.total_waiting = 0;
    this.total_cancel = 0;
  }

  shareInvoice(_id){
    // $('#Invoices_popup').modal('hide');
    this.router.navigate(['/export/'+_id]);
  }

  createPDFInvoice(name){
    console.log(name);
    const fileName = "INV"+name;
    this.generatePDFInvoice(fileName);
  }

  public generatePDFInvoice(fileName) 
  { 
    let data = document.getElementById('Invoices_popup'); 
    html2canvas(data).then(canvas => { 
      // Few necessary setting options 
      let imgWidth = 258; 
      let imgHeight = canvas.height * imgWidth / canvas.width; 

      const contentDataURL = canvas.toDataURL('image/png') 
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
      let position = 0; 
      pdf.addImage(contentDataURL, 'PNG', 0, 30, imgWidth, imgHeight) 
      pdf.save(fileName+'.pdf'); // Generated PDF  
    }); 
  } 


  getAccount() {
  
    this.pay_info._info.snapshotChanges()
      .map(a => {

        if (a.length <= 0) {
          return;
        }
        
        var info = a[0].payload.doc.data();
        var accounts = info.accounts || [];
        
        for (var i in accounts) {
          var item = accounts[i];
          if (item.id == info.used_account) {
            this.fees = +item.fees;
            break;
          }
        }

      }).subscribe();
  }

  showDetails(billing){
    billing.total_fees = (billing.total / 100) * this.fees;
    billing.total_all  = this.fees ? billing.total_fees + billing.total : billing.total;
    this.billing_details = billing;
  }

  changeStatus(billing, status){ 
    billing.status = status;
    this.billingsService.update(billing.id, billing);
  }
  
  getMore(){
   
    var last_key = this.billings.length;
    var count = 0;
    var ii = 0;

    for(let i in this.billings_all){
      var item = this.billings_all[i];
      if(this.filter != 'all' && item.status != this.filter){
        continue;
      }
      
      if(ii >= last_key){
        count++;
        this.billings.push(item);
      }
      if(count >= this.limit){
        break;
      }
      ii++;
    }

  }

  setFilter(status){

    if(this.loading && this.billings_all.length > 0){
      return;
    }

    this.filter = status;

    this.billings = [];
    var count = 0;

    for(let i in this.billings_all){
      let item = this.billings_all[i];
      if(this.filter == 'all' || item.status == this.filter){
        this.billings.push(item);
        count++;
      }

      if(count >= this.limit){
        break;
      }
    }
    

  }

  deleteBilling(billing_id){
    var conf = confirm('هل انت متأكد من حذف الفاتورة؟');

    if(!conf){
      return false;
    }
 
    this.billingsService.delete(billing_id);
  }

}
