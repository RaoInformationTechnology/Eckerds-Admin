import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserRefill} from './refill-prescription/refillPrescription';


@Injectable({
	providedIn: 'root'
})
export class RefillService {

	private handleError(error: HttpErrorResponse) {
		console.log(error);

		// return an observable with a user friendly message
		return throwError('Error! something went wrong.');
	}

	baseUrl = 'http://localhost/Bhavik/myeckerdsAdmin/server/api';
	users: UserRefill[];

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserRefill[]> {
		return this.http.get(`${this.baseUrl}/refill.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	deleteRefillPrescription(refill_id): Observable<UserRefill[]>{
    return this.http.post(`${this.baseUrl}/deleteRefillPrescription.php`,{'id':refill_id}).pipe(
    	map((res) => {
    		this.users = res['data'];
    		return this.users;
    	}),
    	catchError(this.handleError));
	}

}