import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserTransferPrescription} from './transfer-prescription/transferPrescription';
import {config} from './config';


@Injectable({
	providedIn: 'root'
})
export class TransferService {

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	users: UserTransferPrescription[];

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserTransferPrescription[]> {
		return this.http.get(config.baseApiUrl + `transfer.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	deleteTransferPrescription(tp_id): Observable<UserTransferPrescription[]>{
		return this.http.post(config.baseApiUrl +`deleteTransferPrescription.php`,{'id':tp_id}).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	filterTransferByLocation(filteredLocation){
		return this.http.post(config.baseApiUrl + `transferFilter.php` , {'location': filteredLocation}).pipe(
			map((res) => {
				return res;
			}));
	}

	getUserTransferRequest(id){
		return this.http.post(config.baseApiUrl + `selectOneTransfer.php`,{'id':id}).pipe(
			map((res)=>{
				return res;
			}));
	}

	updateStatus(tp_id, status){
		return this.http.post(config.baseApiUrl +  `statusTransfer.php`, {'tp_id':tp_id, 'status': status}).pipe(
			map((res)=>{
			}));
	}

	getTransferPublished(){
		return this.http.get(config.baseApiUrl + `transferPublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));

	}

	getTransferUnPublished(){
		return this.http.get(config.baseApiUrl + `transferUnPublished.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));

	}

}
