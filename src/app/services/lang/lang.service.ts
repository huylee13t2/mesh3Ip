import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  arabic : any = {
    'auth/email-already-in-use' : 'هذا البريد مستخدم بالفعل فى حساب آخر، يمكنك الضغط على تسجيل الدخول للدخول لحسابك.',
    'opps_error' : 'خطأ! يرجى المحاولة.',
    'auth/user-not-found' : 'هذا البريد غير موجود ، يمكنك تسجيل حساب جديد'
    //There is no user record corresponding to this identifier. The user may have been deleted.
  }
  constructor() { }
}
