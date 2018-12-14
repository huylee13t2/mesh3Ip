import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ng2-cookies";

@Component({
	selector: 'app-home-ctn',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeCtnComponent implements OnInit {

	constructor(
		private router: Router,
		private cookieService: CookieService
		) {
		const isLogin = localStorage.getItem("is_login");
		if(isLogin == 'true'){
			this.router.navigate(['/dashboard']);
		}
	}

	ngOnInit() {
		const isLogin = localStorage.getItem("is_login");
		if(isLogin == 'true'){
			this.router.navigate(['/dashboard']);
		}
	}

}
