import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserRefill} from './refill-prescription/refillPrescription';
import {config} from './config';


@Injectable({
	providedIn: 'root'
})
export class RefillService {

	private handleError(error: HttpErrorResponse) {

		// return an observable with a user friendly message
		return throwError('Error! something went wrong.');
	}
	users: UserRefill[];
	dateRefill: any = [];
	locationRefill: any = [];

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserRefill[]> {
		return this.http.get(config.baseApiUrl + `refill.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	deleteRefillPrescription(refill_id): Observable<UserRefill[]>{
		return this.http.post(config.baseApiUrl + `deleteRefillPrescription.php`,{'id':refill_id}).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	filterTransferByLocation(filteredLocation){
		return this.http.post(config.baseApiUrl + `refillFilter.php` , {'location': filteredLocation}).pipe(
			map((res) => {
				return res;
			}));
	}

	getUserRefillRequest(id){
		return this.http.post(config.baseApiUrl + `selectOneRefill.php`,{'id':id}).pipe(
			map((res)=>{
				return res;
			}));
	}

	updateStatus(refill_id, status){
		return this.http.post(config.baseApiUrl +  `statusRefill.php`, {'refill_id':refill_id, 'status': status}).pipe(
			map((res)=>{
			}));
	}

	getRefillPublished(){
		return this.http.get(config.baseApiUrl + `refillPublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	getRefillUnPublished(){
		return this.http.get(config.baseApiUrl + `refillUnPublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	getRecordsDate(){
		return this.http.get(config.baseApiUrl + `monthRecordsRefill.php`).pipe(
			map((res) =>{
				this.dateRefill = res['data'];
				return this.dateRefill;
			}),
			catchError(this.handleError));
	}

	getRecordsLocation(){
		return this.http.get(config.baseApiUrl + `locationRecordsRefill.php`).pipe(
		map((res)=>{
			this.locationRefill = res['data'];
			return this.locationRefill;
		}),
		catchError(this.handleError));
	}

}
