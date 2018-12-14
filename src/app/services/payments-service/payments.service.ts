import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CookieService } from 'ng2-cookies';
import { Payments } from 'src/app/interfaces/payments';


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private info: AngularFirestoreCollection<Payments>;
  user: any = {};


  constructor(private db: AngularFirestore, private cookieService: CookieService) {
    this.user = this.cookieService.getAll();

    if (this.user.user_id) {
      this.info = this.db.collection<Payments>('pay_info', ref => ref.where('uid', '==', this.user.user_id));
    }
  }


  get _info() {
    return this.info;
  }

  getByUId(uid) {
    return this.db.collection<Payments>('pay_info', ref => ref.where('uid', '==', uid));
  }

  update(id, info, exist: boolean) {

    if (!this.user.user_id) {
      return false;
    }

    if (!exist) {
      info.uid = this.user.user_id;
      this.info.add(info);
      return;
    }
    let i = this.db.doc<Payments>(`pay_info/${id}`);
    i.update(info);

  }


}
