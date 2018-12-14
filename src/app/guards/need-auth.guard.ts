import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth-service/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class NeedAuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser()
        .then(user => {  
          if(!user.emailVerified){
            this.router.navigate(['/email-verify']);
            return resolve(false);
          }else{
            this.authService.setLoginCookie(user);
            this.router.navigate(['/']);
            return resolve(true);
          }
        }, err => {
          this.router.navigate(['/login']);
          return resolve(false);
        })
    })
  }
}
