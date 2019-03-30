import { Component, OnInit } from '@angular/core';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {RefillService} from '../refill.service';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {TransferService} from '../transfer.service';
import {PriceService} from '../price.service';	
import {UserPriceCheck} from '../price-check/priceCheck';
import {Chart} from 'chart.js';
import { Observable, interval, Subscription } from 'rxjs';
// import {AllLocation} from '../add-location/allLocation';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	private updateSubscription: Subscription;
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
	locationRecordsPrice: any = [];
	locationRecordsRefill: any = [];
	locationRecordsTransfer: any = [];
	totalLocation: string[] = [];
	chart1 : any =  [];
	chart2 : any =  [];
	chart3 : any =  [];
	months =  ['Jan','Feb','Mar','Apr',
	'May','June','July','Aug', 'Sep','Oct', 'Nov','Dec'];
	// totalLocation =  ['Wauchula','Palmetto','Bradenton','Apollo Beach','New Port Beach','New Port Richey','Lake Jackson','West Bradenton'];
	// totalLocation = [1,2,3,4,5,6,7,8];
	totalRequest: any = [];
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
		this.countLocationRecords();
		this.allLocations();

		// this.updateSubscription = interval(10000).subscribe(
		// 	(val) => {
			// 		this.getTransferList(); 
			// 		this.getRefillList();
			// 		this.getPriceCheck();
			// 		this.getTransferListPublished();
			// 		this.getPriceListPublished();
			// 		this.getRefillListPublished();
			// 		this.countDateRecords();
			// 		this.countLocationRecords();
			// 	});
		}

		// chart function #################
		allRequestTypesChart(){
			this.chart1 = new Chart('canvas1', {
				type: 'line',
				data: {
					labels: this.months,
					datasets: [
					{ 
						label: "Refill Req",
						backgroundColor: "#d6d322",
						data: this.dateRecordsRefill,
						borderColor: "#d6d322",
						pointBorderColor: "#F3FAF5",
						fill: false,
					},
					{ 
						label: "Transfer Req",
						backgroundColor: "#ed5555",
						data: this.dateRecordsTaransfer,
						borderColor: "#ed5555",
						pointBorderColor: "#F3FAF5",
						fill: false,
					},
					{ 
						label: "Price Req",
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
						position: 'bottom',
						labels:{
							fontSize:10,
							fontColor: "white",
							boxWidth: 10,
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
		}
		// all records chart ##################
		totalRecordsChart(){
			this.chart2 = new Chart('canvas2', {
				type: 'line',
				data: {
					labels: this.months,
					datasets: [
					{ 
						label: "Total Req",
						backgroundColor: "#d6d322",
						data: this.totalRequest,
						borderColor: "#d6d322",
						pointBorderColor: "#F3FAF5",
						fill: false,
					}
					]
				},
				options: {
					responsive: true,
					legend: {
						display: true,
						position: 'bottom',
						labels:{
							fontSize:10,
							fontColor: "white",
							boxWidth: 10,
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
		}

		// location wise records chart ##################
		locationWiseChart(){
			this.chart3 = new Chart('canvas3', {
				type: 'line',
				data: {
					labels: this.totalLocation,
					datasets: [
					{ 
						label: "Refill Req",
						backgroundColor: "#d6d322",
						data: this.locationRecordsRefill,
						borderColor: "#d6d322",
						pointBorderColor: "#F3FAF5",
						fill: false,
					},
					{ 
						label: "Transfer Req",
						backgroundColor: "#ed5555",
						data: this.locationRecordsTransfer,
						borderColor: "#ed5555",
						pointBorderColor: "#F3FAF5",
						fill: false,
					},
					{ 
						label: "Price Req",
						backgroundColor: "#5f65e2",
						data: this.locationRecordsPrice,
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
						position: 'bottom',
						labels:{
							fontSize:10,
							fontColor: "white",
							boxWidth: 10,
						}
					},
					scales: {
						xAxes: [{
							ticks: {
								fontColor: "white",
							},
							scaleLabel: {
								display: true,
								labelString: 'Locations',
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
					this.allRequestTypesChart();
					var array = [this.dateRecordsPrice, this.dateRecordsRefill, this.dateRecordsTaransfer];
					this.totalRequest = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
					this.totalRecordsChart();				
				});
			this.transferService.getRecordsDate().subscribe(
				(res)=>{
					this.dateRecordsTaransfer = res;
					this.dateRecordsTaransfer = Object.values(this.dateRecordsTaransfer);
					this.allRequestTypesChart();
					var array = [this.dateRecordsPrice, this.dateRecordsRefill, this.dateRecordsTaransfer];
					this.totalRequest = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
					this.totalRecordsChart();
				});
			this.refillService.getRecordsDate().subscribe(
				(res)=>{
					this.dateRecordsRefill = res;
					this.dateRecordsRefill = Object.values(this.dateRecordsRefill);
					this.allRequestTypesChart();
					var array = [this.dateRecordsPrice, this.dateRecordsRefill, this.dateRecordsTaransfer];
					this.totalRequest = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
					// console.log(this.totalRequest);
					this.totalRecordsChart();
				});
		}

		countLocationRecords(){
			this.priceService.getRecordsLocation().subscribe(
				(res)=>{
					this.locationRecordsPrice = res;
					this.locationRecordsPrice = Object.values(this.locationRecordsPrice);
					console.log(this.locationRecordsPrice);
					this.locationWiseChart();
				});
			this.transferService.getRecordsLocation().subscribe(
				(res)=>{
					this.locationRecordsTransfer = res;
					this.locationRecordsTransfer = Object.values(this.locationRecordsTransfer);
					console.log(this.locationRecordsTransfer);
					this.locationWiseChart();
				});
			this.refillService.getRecordsLocation().subscribe(
				(res)=>{
					this.locationRecordsRefill = res;
					this.locationRecordsRefill = Object.values(this.locationRecordsRefill);
					console.log(this.locationRecordsRefill);
					this.locationWiseChart();
				});
		}

		allLocations(){
			this.priceService.newLocation().subscribe(
				(res) => {

					for(var i = 0; i < res.length; i++) {
						var obj: any  = res[i];
						this.totalLocation.push(obj.city);
					}
					console.log(this.totalLocation);
					// this.totalLocation = res;
					console.log(res);
				})
		}
	}