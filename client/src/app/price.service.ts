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
		console.log(error);
		return throwError('Error! something went wrong.');
	}

	users: UserPriceCheck[];
	res : any;

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserPriceCheck[]> {
		return this.http.get(config.baseApiUrl + `price.php`).pipe(
			map((res) => {
				this.users = res['data'];
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
		console.log(filteredLocation);
		return this.http.post(config.baseApiUrl +`priceFilter.php` , {'location': filteredLocation}).pipe(
			map((res) => {
				console.log(res);
				return res;
			}));
	}

	getUserPriceRequest(id){
		return this.http.post(config.baseApiUrl +`selectOnePrice.php`,{'id':id}).pipe(
		map((res)=>{
			 return res;
			 console.log(res);
		}));
	}
}
