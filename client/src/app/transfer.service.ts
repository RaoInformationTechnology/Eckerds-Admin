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
		console.log(error);

		// return an observable with a user friendly message
		return throwError('Error! something went wrong.');
	}

	baseUrl = 'http://localhost/Bhavik/myeckerdsAdmin/server/api';
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
		console.log(filteredLocation);
		return this.http.post(config.baseApiUrl + `/transferFilter.php` , {'location': filteredLocation}).pipe(
			map((res) => {
				console.log(res);
				return res;
			}));
	}

	getUserTransferRequest(id){
		return this.http.post(config.baseApiUrl + `/selectOneTransfer.php`,{'id':id}).pipe(
			map((res)=>{
				return res;
				console.log(res);
			}));
	}

	updateStatus(tp_id, status){
		return this.http.post(config.baseApiUrl +  `statusTransfer.php`, {'tp_id':tp_id, 'status': status}).pipe(
			map((res)=>{
				console.log('hello');
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

}
