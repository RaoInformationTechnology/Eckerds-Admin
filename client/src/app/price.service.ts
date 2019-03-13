import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {UserPriceCheck} from './price-check/priceCheck';


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private handleError(error: HttpErrorResponse) {
		console.log(error);

		// return an observable with a user friendly message
		return throwError('Error! something went wrong.');
	}

	baseUrl = 'http://localhost/Bhavik/myeckerdsAdmin/server/api';
	users: UserPriceCheck[];

	constructor(private http: HttpClient) { }

	getAll(): Observable<UserPriceCheck[]> {
		return this.http.get(`${this.baseUrl}/price.php`).pipe(
			map((res) => {
				this.users = res['data'];
				return this.users;
			}),
			catchError(this.handleError));
	}

	deletePriceCheckRequest(pc_id): Observable<UserPriceCheck[]>{
    return this.http.post(`${this.baseUrl}/deletePriceCheck.php`,{'id':pc_id}).pipe(
    	map((res) => {
    		this.users = res['data'];
    		return this.users;
    	}),
    	catchError(this.handleError));
	}
}
