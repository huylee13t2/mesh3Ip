import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { CookieService } from "ng2-cookies";
import { User } from "src/app/interfaces/user";

@Injectable()
export class AuthService {

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private cookieService: CookieService
  ) {

  }


  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject('الرجاء تسجيل الدخول للمتابعة.');
        }
      })
    })
  }

  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res)
      }, err => reject(err))
    })
  }

  doRegister(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          res.user.sendEmailVerification();
          this.updateCurrentUser(user);
          var u:any = {...new User()};
          u.uid = res.user.uid;
          u.name = user.name;
          u.email = user.email;
          this.db.collection<User>('users').add(u);
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogin(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut()
        this.removeLoginCookie();
        resolve();
      }
      else {
        reject();
      }
    });
  }

  setLoginCookie(user) {
    this.cookieService.set('user_id', user.uid);
    this.cookieService.set('user_name', user.displayName);
    this.cookieService.set('user_email', user.email);
    this.cookieService.set('user_email_verified', user.emailVerified);
  }

  removeLoginCookie() {
    this.cookieService.deleteAll();
  }

}
