import { Component, OnInit } from '@angular/core';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {RefillService} from '../refill.service';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {TransferService} from '../transfer.service';
import {PriceService} from '../price.service';
import {UserPriceCheck} from '../price-check/priceCheck';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	usersTransferPrescription :  UserTransferPrescription[];
	usersRefill :  UserRefill[] = [];
	usersPriceCheck :  UserPriceCheck[];
	error = '';
	success = '';

	constructor(private refillService: RefillService, private transferService: TransferService,  private priceService: PriceService) { 
	}

	ngOnInit() {
		this.getTransferList();
		this.getRefillList();
		this.getPriceCheck();
	}
	// transfer request ****************

	getTransferList(): void{
		this.transferService.getAll().subscribe(
			(res: UserTransferPrescription[]) => {
				this.usersTransferPrescription = res;
				(err) => {
					this.error = err;
				}
			});
	}

	countTransferRequest(flag) {
		if (flag === null) {
			return this.usersTransferPrescription.length;
		}
	}

	// refill request ***************

	getRefillList(): void{
		this.refillService.getAll().subscribe(
			(res: UserRefill[]) => {
				this.usersRefill = res;
			},
			(err) => {
				this.error = err;
			}
			);
	}

	countRefillingRequest(flag) {
		if (flag === null) {
			return this.usersRefill.length;
		}
	}


	//price check *******************
	getPriceCheck(): void{
		this.priceService.getAll().subscribe(
			(res: UserPriceCheck[]) => {
				this.usersPriceCheck = res;
			},
			(err) => {
				this.error = err;
			}
			);
	}

	countPriceRequest(flag) {
		if (flag === null) {
			return this.usersPriceCheck.length;
		}
	}
}
