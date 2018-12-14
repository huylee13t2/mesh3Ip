import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CookieService } from 'ng2-cookies';
import { User } from '../../interfaces/user';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private settings: AngularFirestoreCollection<User>;
  user: any = {};



  constructor(private db: AngularFirestore, private cookieService: CookieService, private afstorage: AngularFireStorage) {
    this.user = this.cookieService.getAll();

    if (this.user.user_id) {
      this.settings = this.db.collection<User>('users', ref => ref.where('uid', '==', this.user.user_id));
    }
  }


  get _settings() { return this.settings; }
  getByUId(uid) {
    return this.db.collection<User>('users', ref => ref.where('uid', '==', uid));
  }

  update(id: string, user: User, exist?: boolean) {

    if (!this.user.user_id) {
      return false;
    }

    if (!exist) {
      var u = new User();
      u.uid = this.user.user_id;
      u.name = this.user.user_name;
      u.email = this.user.user_email;
      user = { ...u, ...user };
      this.settings.add(user);
      return;
    }

    let i = this.db.doc<User>(`users/${id}`);
    i.update(user);
  }

  saveLogo(file) {
    const randome_id = Math.random().toString(26).substring(2);
    var ref = this.afstorage.ref(`/companies/${randome_id}`);
    return ref.put(file);
  }

  getLogo(url) {
    return this.afstorage.ref(`/companies/${url}`).getDownloadURL();
  }
}
