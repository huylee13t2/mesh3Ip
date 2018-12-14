import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser()
        .then(user => {
          if (user.emailVerified) {
            this.router.navigate(['/']);
            return resolve(false);
          } else if(!user.emailVerified) {
            this.router.navigate(['/email-verify']);
            return resolve(false);
          }
        }).catch(err => {
          return resolve(true);
        })
    })
  }
}
