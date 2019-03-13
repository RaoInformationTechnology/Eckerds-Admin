import { Component, OnInit } from '@angular/core';
import {UserPriceCheck} from '../price-check/priceCheck';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {PriceService} from '../price.service';
import {RefillService} from '../refill.service';
import {TransferService} from '../transfer.service';
import {AppComponent} from '../app.component';

@Component({
	selector: 'app-all-records',
	templateUrl: './all-records.component.html',
	styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {

	usersPriceCheck :  UserPriceCheck[];
	usersRefill :  UserRefill[];
	usersTransferPrescription :  UserTransferPrescription[];
	error = '';
	success = '';
	userFilter: UserPriceCheck = {location: ''};


	constructor(private priceService: PriceService,private refillService: RefillService,private transferService: TransferService) { }

	ngOnInit() {
		this.getPriceCheck();
		this.getTransferList();
		this.getRefillList();
	}

	//price check ****************
	getPriceCheck(): void{
		this.priceService.getAll().subscribe(
			(res: UserPriceCheck[]) => {
				this.usersPriceCheck = res;
			},
			(err) => {
				this.error = err;
			});
	}

	// transfer request ***************
	getTransferList(): void{
		this.transferService.getAll().subscribe(
			(res: UserTransferPrescription[]) => {
				this.usersTransferPrescription = res;
			},
			(err) => {
				this.error = err;
			});
	}

	// refill list *************************
	getRefillList(): void{
		this.refillService.getAll().subscribe(
			(res: UserRefill[]) => {
				this.usersRefill = res;
			},
			(err) => {
				this.error = err;
			});
	}
}
