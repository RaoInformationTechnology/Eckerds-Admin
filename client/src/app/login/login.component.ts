import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private loginService: LoginService, private router: Router) { }

	ngOnInit() {
	}
	msg: string = null;
	errmsg: string = null;
	loading = false;

	user = {
		email: "",
		password: ""
	}

	login(detail){
		this.loading = true;
		this.loginService.authorize(detail).subscribe(res=>{
			localStorage.setItem("users",JSON.stringify(res));
			this.msg = 'Logged in successfully! ';
				this.router.navigate(['dashboard']);
		},err=>{
			console.log("error",err);
			this.errmsg = 'Incorrect info!';
			this.loading = false;
		})
	}
}
