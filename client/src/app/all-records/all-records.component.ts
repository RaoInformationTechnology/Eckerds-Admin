import { Component, OnInit } from '@angular/core';
import {UserPriceCheck} from '../price-check/priceCheck';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {PriceService} from '../price.service';
import {RefillService} from '../refill.service';
import {TransferService} from '../transfer.service';
import {AppComponent} from '../app.component';
import * as $ from 'jquery';

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
	publishedRefill = [];
	publishedPrice= [];
	publishedTransfer = [];
	unpublishedRefill= [];
	unpublishedPrice = [];
	unpublishedTransfer = [];


	constructor(private priceService: PriceService,private refillService: RefillService,private transferService: TransferService) { }

	ngOnInit() {
		this.allRecords();

		(function($, document) {
			let height = -1;

			$('.tab__content').each(function() {
				height = height > $(this).outerHeight() ? height : $(this).outerHeight();
				$(this).css('position', 'absolute');
			});
			$('[data-tabs]').css('min-height', height + 40 + 'px');
		}(jQuery, document));
	}

	allRecords(){
		this.priceService.getAll().subscribe(
			(res: UserPriceCheck[]) => {
				this.usersPriceCheck = res;
				console.log("all price" , this.usersPriceCheck);
			},
			(err) => {
				this.error = err;
			});

		this.transferService.getAll().subscribe(
			(res: UserTransferPrescription[]) => {
				this.usersTransferPrescription = res;
				console.log("all transfer" , this.usersTransferPrescription);
			},
			(err) => {
				this.error = err;
			});

		this.refillService.getAll().subscribe(
			(res: UserRefill[]) => {
				this.usersRefill = res;
				console.log("all refill" , this.usersRefill);
			},
			(err) => {
				this.error = err;
			});
	}

	published(){
		this.priceService.getPricePublished().subscribe(
			(res) => {
				this.publishedPrice = res;
				console.log("published price" , this.publishedPrice);

			},
			(err) => {
				this.error = err;
			});

		this.transferService.getTransferPublished().subscribe(
			(res) => {
				this.publishedTransfer = res;
				console.log("published transfer" , this.publishedTransfer);
			},
			(err) => {
				this.error = err;
			});

		this.refillService.getRefillPublished().subscribe(
			(res) => {
				this.publishedRefill = res;
				console.log("published refill" , this.publishedRefill);
			},
			(err) => {
				this.error = err;
			});
	}

	unpublished(){
		this.priceService.getPriceUnPublished().subscribe(
			(res) => {
				this.unpublishedPrice = res;
				console.log("unpublished price" , this.unpublishedPrice);
			},
			(err) => {
				this.error = err;
			});

		this.transferService.getTransferUnPublished().subscribe(
			(res) => {	
				this.unpublishedTransfer = res;
				console.log("unpublished transfer" , this.unpublishedTransfer);
			},
			(err) => {
				this.error = err;
			});

		this.refillService.getRefillUnPublished().subscribe(
			(res) => {
				this.unpublishedRefill = res;
				console.log("unpublished refill" , this.unpublishedRefill);
			},
			(err) => {
				this.error = err;
			});
	}
}
