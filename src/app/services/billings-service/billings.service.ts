import { Injectable } from '@angular/core';

import { Billing } from '../../interfaces/billing';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CookieService } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class BillingsService {

  billings: AngularFirestoreCollection<Billing>;
  private billing: AngularFirestoreDocument<Billing>
  user:any = {};

  constructor(private db : AngularFirestore, private cookieService : CookieService) { 
    this.user = this.cookieService.getAll(); 
    if(this.user.user_id){
      this.billings = this.db.collection<Billing>('billings', ref => {
        return ref.where('uid', '==', this.user.user_id).orderBy('_number', 'desc');
      });
    }
  }

  get getBillings() {
     return this.billings;
  }

  add(billing){
    
    if(!this.user.user_id){
      return false;
    }

    billing.uid    = this.user.user_id;
    billing.status = 'waiting';
    billing.total  = 0;
    
    this.billings.add(billing);
    return true;
  }

  update(id, billing){
    this.billing = this.db.doc<Billing>(`billings/${id}`);
    this.billing.update(billing);
  }

  delete(id){
    this.billing = this.db.doc<Billing>(`billings/${id}`);
    this.billing.delete();
  }


  get getLastItem(){
    return this.db.collection<Billing>('billings', ref => ref.where('uid', '==', this.user.user_id).orderBy('_number', 'desc').limit(1));
  }

  getById (id){
    return this.db.doc<Billing>(`billings/${id}`);
  }

}
