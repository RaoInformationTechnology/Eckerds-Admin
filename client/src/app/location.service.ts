import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {NewLocation} from './add-location/allLocation';
import {config} from './config';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	allLocation: NewLocation[];

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	constructor(private http: HttpClient) { }

	newLocation(): Observable<NewLocation[]> {
		return this.http.get(config.baseApiUrl + `getTotalLocation.php`).pipe(
			map((res) => {
				// console.log(res);
				this.allLocation = res['data'];
				return this.allLocation;
			}),
			catchError(this.handleError));
	}

	addLocation(info){
		console.log(info);
		return this.http.post(config.baseApiUrl + `addLocation.php`,info).pipe(
			map(()=>""));
	}

	deleteLocation(id){
		console.log(id);
		return this.http.post(config.baseApiUrl + `deleteLocation.php`, {'id':id}).pipe(
			map(()=>this.newLocation()));
	}

	getSingleLocation(id){
		return this.http.post(config.baseApiUrl + `getSingleLocation.php`,{'id':id}).pipe(
			map((res)=>{
				return res;
			}));
	}

	updateLocation(info){
		return this.http.post(config.baseApiUrl + `updateLocation.php`, info).pipe(
			map(()=>""));
	}
}
