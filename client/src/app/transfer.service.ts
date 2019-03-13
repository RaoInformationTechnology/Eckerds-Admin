import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserTransferPrescription} from './transfer-prescription/transferPrescription';


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
		return this.http.get(`${this.baseUrl}/transfer.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	deleteTransferPrescription(tp_id): Observable<UserTransferPrescription[]>{
    return this.http.post(`${this.baseUrl}/deleteTransferPrescription.php`,{'id':tp_id}).pipe(
    	map((res) => {
    		this.users = res['data'];
    		return this.users;
    	}),
    	catchError(this.handleError));
	}
}
