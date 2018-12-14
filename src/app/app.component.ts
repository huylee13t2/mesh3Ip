import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './services/auth-service/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   

  constructor(public authService : AuthService, private afAuth:AngularFireAuth, private router: Router){
     
    
  }
 
  ngOnInit(){
    this.afAuth.auth.onAuthStateChanged(user => { 
      if (!user) {
        // this.router.navigate(['/login']);
      }
    })
  }

}
