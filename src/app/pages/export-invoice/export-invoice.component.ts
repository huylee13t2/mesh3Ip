import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BillingsService } from 'src/app/services/billings-service/billings.service';
import { UserSettingsService } from 'src/app/services/user-settings-service/user-settings.service';
import { Billing } from 'src/app/interfaces/billing';

import { PaymentsService } from 'src/app/services/payments-service/payments.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare var jquery:any;
declare var $ :any;

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-export-invoice',
  templateUrl: './export-invoice.component.html',
  styleUrls: ['./export-invoice.component.css']
})
export class ExportInvoiceComponent implements OnInit {

  id: string;
  loading: any = {
    billing: true,
    account: true,
    logo: true
  };
  billing: any;
  logoUrl: string;
  accountInfo: any;
  fees_number: string;
  downloading: boolean = false;
  isPDF: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private billingsService: BillingsService,
    private settingsService: UserSettingsService,
    private payService: PaymentsService,
    private http: HttpClient,
    private titleService : Title
    ) {
    this.id = this.route.snapshot.params.id;
    this.titleService.setTitle('فاتورك');
  }

  get banks() { return { ahli: 'الاهلي', rajhi: 'الراجحي', bilad: 'البلاد', inma: 'الانماء' } }

  ngOnInit() {
    // if (!this.id) {
      //   this.loading.billing = false;
      //   return;
      // }
      this.loading.billing = true;

      this.billingsService.getById(this.id).snapshotChanges()
      .map(a => {
        this.loading.billing = false;

        this.billing = a.payload.data() as Billing;

        if(!this.billing){
          this.billing = null;
          return;
        }

        this.titleService.setTitle('فاتورة #INV' + this.billing._number);

        this.billing.total = 0;

        for (var i in this.billing.products) {
          var item = this.billing.products[i];
          this.billing.total += +item.price * +item.quantity;
        }

        this.billing.total_all = this.billing.total;
        this.billing.fees = 0;
        this.billing.total_fees = 0;
        this.getAccount(this.billing.uid);
        this.getSettings(this.billing.uid);
      })
      .subscribe();

    }

    createPDFInvoice(name){
      console.log(name);
      this.isPDF = true;
      const fileName = "INV"+name;
      this.generatePDFInvoice(fileName);
    }

    public generatePDFInvoice(fileName) 
    { 
      let data = document.getElementById('page-A4'); 
      html2canvas(data).then(canvas => { 
        // Few necessary setting options 
        let imgWidth = 208; 
        let pageHeight = 295; 
        let imgHeight = canvas.height * imgWidth / canvas.width; 
        let heightLeft = imgHeight; 

        let _width = canvas.width;
        let _height = canvas.height;

        var width         = canvas.width;
        var height        = canvas.clientHeight;

        const contentDataURL = canvas.toDataURL('image/png', 1.0) 
        let pdf = new jspdf('p', 'pt', 'a4'); // A4 size page of PDF 
        let position = 0; 
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 595, 842) 
        pdf.save(fileName+'.pdf'); // Generated PDF  
      }); 
    } 

    getAccount(uid) {
      this.loading.account = true;
      this.payService.getByUId(uid).snapshotChanges()
      .map(a => {
        this.loading.account = false;

        if (a.length <= 0) {
          return;
        }
        var info = a[0].payload.doc.data();
        var accounts = info.accounts || [];
        var used = info.used_account;

        for (var i in accounts) {
          var item = accounts[i];
          if (item.id == used) {
            this.accountInfo = item;
            this.billing.fees = item.fees;
            this.setFees(this.accountInfo.fees);
            break;
          }
        }

      }).subscribe();
    }

    getSettings(uid) {

      this.loading.logo = true;
      this.settingsService.getByUId(uid).snapshotChanges()
      .map(a => {
        this.loading.logo = false;

        if (a.length <= 0) {
          return;
        }
        var info = a[0].payload.doc.data();

        this.fees_number = info.fees_number || null;
        var logo = info.logo || null;

        if (!logo) {
          return;
        }
        this.loading.logo = true;
        this.settingsService.getLogo(logo).subscribe(logo => {
          this.loading.logo = false;
          this.logoUrl = logo || null;
        }, () => {
          this.loading.logo = false;
          this.logoUrl = null;
        })

      }).subscribe();

    }

    setFees(fees: number) {
      var fees = +fees;
      if (!fees) {
        return;
      }
      this.billing.fees = fees;
      this.billing.total_fees = (this.billing.total / 100) * fees;
      this.billing.total_all = this.billing.total_fees + this.billing.total;
    }

    createPDF() {

      this.downloading = true;
      var date = this.todayDate;
      var account = this.accountInfo ? { ...this.accountInfo } : '';
      if (account) {
        account.bank_name = this.banks[account.bank_name];
      }
      var body = { ...this.billing, date, account, fees_number: this.fees_number || '', logo: this.logoUrl || 'https://ftortk.io/assets/images/sm-logo.png' }
      var url = (environment.production ? 'https://arttime.sa/ftortk/index.php' : 'http://localhost/ftortk/index.php');

      this.http.post(url, body, {
        responseType: 'blob'
      })
      .subscribe(res => {
        var url = window.URL.createObjectURL(res);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'AT' + this.billing._number + '.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();

        this.downloading = false;
      }, error => {
        this.downloading = false;
      }, () => {
        this.downloading = false;
      });

    }

    get todayDate() {
      var today: any = new Date(this.billing.date);
      var dd: any = today.getDate();
      var mm: any = today.getMonth() + 1;
      var yyyy: any = today.getFullYear();
      dd = dd < 10 ? '0' + dd : dd;
      mm = mm < 10 ? '0' + mm : mm;

      return mm + '/' + dd + '/' + yyyy;
    }

  }
