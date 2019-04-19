import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserPriceCheck} from './price-check/priceCheck';
import {config} from './config';


@Injectable({
	providedIn: 'root'
})
export class PriceService {

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	users: UserPriceCheck[];
	datePrice: any;
	locationPrice: any;
	res : any;

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserPriceCheck[]> {
		return this.http.get(config.baseApiUrl + `price.php`).pipe(
			map((res) => {
				console.log(res);
				this.users = res['data'];
				// console.log(this.users);
				return this.users;
			}),
			catchError(this.handleError));
	}

	deletePriceCheckRequest(pc_id): Observable<UserPriceCheck[]>{
		return this.http.post(config.baseApiUrl +`deletePriceCheck.php`,{'id':pc_id}).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError)); 
	}

	filterPriceByLocation(filteredLocation){
		return this.http.post(config.baseApiUrl +`priceFilter.php` , {'location': filteredLocation}).pipe(
			map((res) => {
				return res;
			}));
	}

	getUserPriceRequest(id){
		return this.http.post(config.baseApiUrl +`selectOnePrice.php`,{'id':id}).pipe(
			map((res)=>{
				return res;
			}));
	}

	updateStatus(pc_id, status){
		return this.http.post(config.baseApiUrl +  `statusPrice.php`, {'pc_id':pc_id, 'status': status}).pipe(
			map((res)=>{
			}));
	}

	getPricePublished(){
		return this.http.get(config.baseApiUrl + `pricePublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	getPriceUnPublished(){
		return this.http.get(config.baseApiUrl + `priceUnPublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));

	}

	getRecordsDate(){
		return this.http.get(config.baseApiUrl + `monthRecordsPrice.php`).pipe(
			map((res) =>{
				this.datePrice = res['data'];
				return this.datePrice;
			}),
			catchError(this.handleError));
	}

	getRecordsLocation(){
		return this.http.get(config.baseApiUrl + `locationRecordsPrice.php`).pipe(
			map((res)=>{
				this.locationPrice = res['data'];
				return this.locationPrice;
			}),
			catchError(this.handleError));
	}
}
