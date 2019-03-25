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
	dateRecordsPrice: any = [];
	dateRecordsTaransfer: any = [];
	dateRecordsRefill: any = [];
	chart : any =  [];
	months =  ['Jan','Feb','Mar','Apr',
	'May','June','July','Aug', 'Sep','Oct', 'Nov','Dec'];

	constructor(private refillService: RefillService, private transferService: TransferService,  private priceService: PriceService) { 
	}

	ngOnInit() {
		this.getTransferList();
		this.getRefillList();
		this.getPriceCheck();
		this.getTransferListPublished();
		this.getRefillListPublished();
		this.getPriceListPublished();
		this.countDateRecords();
		
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

	countDateRecords(){
		this.priceService.getRecordsDate().subscribe(
			(res)=>{
				this.dateRecordsPrice = res;
				this.dateRecordsPrice = Object.values(this.dateRecordsPrice);
				
			});
		this.transferService.getRecordsDate().subscribe(
			(res)=>{
				this.dateRecordsTaransfer = res;
				this.dateRecordsTaransfer = Object.values(this.dateRecordsTaransfer);
				
			});
		this.refillService.getRecordsDate().subscribe(
			(res)=>{
				this.dateRecordsRefill = res;
				this.dateRecordsRefill = Object.values(this.dateRecordsRefill);
				

				this.chart = new Chart('canvas', {
					type: 'line',
					data: {
						labels: this.months,
						datasets: [
						{ 
							label: "Refill Request",
							backgroundColor: "#d6d322",
							data: this.dateRecordsRefill,
							borderColor: "#d6d322",
							pointBorderColor: "#F3FAF5",
							fill: false,
						},
						{ 
							label: "Transfer Request",
							backgroundColor: "#ed5555",
							data: this.dateRecordsTaransfer,
							borderColor: "#ed5555",
							pointBorderColor: "#F3FAF5",
							fill: false,
						},
						{ 
							label: "Price Request",
							backgroundColor: "#5f65e2",
							data: this.dateRecordsPrice,
							borderColor: "#5f65e2",
							pointBorderColor: "#F3FAF5",
							fill: false,
						}
						]
					},
					options: {
						responsive: true,
						legend: {
							display: true,
							position: 'left',
							labels:{
								fontSize:10,
								fontColor: "white"
							}
						},
						scales: {
							xAxes: [{
								ticks: {
									fontColor: "white",
								},
								scaleLabel: {
									display: true,
									labelString: 'Month',
									fontColor: "white"
								},
								display: true,

							}],
							yAxes: [{
								ticks: {
									fontColor: "white",
								},scaleLabel: {
									display: true,
									labelString: 'No. of Records',
									fontColor: "white"
								},
								display: true,	
							}],
						}
					}
				});
			});
	}
}
