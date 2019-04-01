import { Component, OnInit } from '@angular/core';
import {UserPriceCheck} from '../price-check/priceCheck';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {PriceService} from '../price.service';
import {TransferService} from '../transfer.service';
import {RefillService} from '../refill.service';
import {Router, Params} from '@angular/router';
import {LocationService} from '../location.service';


@Component({
	selector: 'app-filter-by-location',
	templateUrl: './filter-by-location.component.html',
	styleUrls: ['./filter-by-location.component.css']
})
export class FilterByLocationComponent implements OnInit {

	usersPriceCheck :  UserPriceCheck[] = [];
	usersTransferRequest :  UserTransferPrescription[] = [];
	usersRefillRequest :  UserRefill[] = [];
	error = '';
	totalLocation: any = []; 

	constructor(private locationService: LocationService, private priceService: PriceService,  private router: Router, private transferService: TransferService, private refillService: RefillService) { }

	ngOnInit(){
		this.allLocations();
	}

	selectedLocation: string = '';
	selectChangeHandler(event: any): void{
		this.selectedLocation = event.target.value;
		console.log(this.selectedLocation);
		var filteredLocation = this.selectedLocation;
		this.priceService.filterPriceByLocation(filteredLocation).subscribe(
			(res: UserPriceCheck[]) => {
				this.usersPriceCheck = res;
			});
		this.transferService.filterTransferByLocation(filteredLocation).subscribe(
			(res: UserPriceCheck[]) => {
				this.usersTransferRequest = res;
			});
		this.refillService.filterTransferByLocation(filteredLocation).subscribe(
			(res: UserPriceCheck[]) => {
				this.usersRefillRequest = res;
			});
	}

	allLocations(){
			this.locationService.newLocation().subscribe(
				(res) => {

					for(var i = 0; i < res.length; i++) {
						var obj: any  = res[i];
						this.totalLocation.push(obj.city);
					}
					console.log(this.totalLocation);				})
		}
}