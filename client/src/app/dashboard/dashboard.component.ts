import { Component, OnInit } from '@angular/core';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {RefillService} from '../refill.service';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {TransferService} from '../transfer.service';
import {PriceService} from '../price.service';
import {UserPriceCheck} from '../price-check/priceCheck';
import {Chart} from 'chart.js';

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
	usersTransferLen: any;
	usersRefillLen: any;
	usersPriceLen: any;
	userTransferPublished: any  =  [];
	userRefillPublished: any  =  [];
	userPricePublished: any  =  [];
	publishedTransfer: any;
	publishedRefill: any;
	publishedPrice: any;
	unpublishedTransfer: any;
	unpublishedRefill: any;
	unpublishedPrice: any;

	constructor(private refillService: RefillService, private transferService: TransferService,  private priceService: PriceService) { 
	}
																				
	ngOnInit() {
		this.getTransferList();
		this.getRefillList();
		this.getPriceCheck();
		this.getTransferListPublished();
		this.getRefillListPublished();
		this.getPriceListPublished();
	}
	// transfer request ****************

	getTransferList(): void{
		this.transferService.getAll().subscribe(
			(res: UserTransferPrescription[]) => {
				this.usersTransferPrescription = res;
				this.usersTransferLen = this.usersTransferPrescription.length;
				(err) => {
					this.error = err;
				}
			});
	}

	getTransferListPublished(): void{
		this.transferService.getTransferPublished().subscribe(
			(res) => {
				this.userTransferPublished = res;
				this.publishedTransfer = this.userTransferPublished.length;
				this.unpublishedTransfer = this.usersTransferPrescription.length - this.userTransferPublished.length;
			})
	};
	// refill request ***************

	getRefillList(): void{
		this.refillService.getAll().subscribe(
			(res: UserRefill[]) => {
				this.usersRefill = res;
				this.usersRefillLen = this.usersRefill.length;
			},
			(err) => {
				this.error = err;
			}
			);
	}

	getRefillListPublished(): void{
		this.refillService.getRefillPublished().subscribe(
			(res) => {
				this.userRefillPublished = res;
				this.publishedRefill = this.userRefillPublished.length;
				this.unpublishedRefill = this.usersRefill.length - this.userRefillPublished.length;
			})
	};

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
				this.usersPriceLen = this.usersPriceCheck.length;
			},
			(err) => {
				this.error = err;
			}
			);
	}

	getPriceListPublished(): void{
		this.priceService.getPricePublished().subscribe(
			(res) => {
				this.userPricePublished = res;
				this.publishedPrice = this.userPricePublished.length;
				this.unpublishedPrice = this.usersPriceCheck.length - this.userPricePublished.length;
			})
	}

	countPriceRequest(flag) {
		if (flag === null) {
			return this.usersPriceCheck.length;
		}
	}
}
