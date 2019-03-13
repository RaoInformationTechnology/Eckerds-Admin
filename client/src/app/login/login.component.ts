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

	user = {
		email: "",
		password: ""
	}

	login(detail){
		// console.log(detail);
		this.loginService.authorize(detail).subscribe(res=>{
			// console.log("respon..........",res)
			localStorage.setItem("users",JSON.stringify(res));
			this.msg = 'Logged in successfully! ';
			setTimeout(() => {
				this.router.navigate(['dashboard']);
			}, 1000);
		},err=>{
			console.log("error",err);
			this.errmsg = 'Incorrect info! ';
		})
	}

	


}
