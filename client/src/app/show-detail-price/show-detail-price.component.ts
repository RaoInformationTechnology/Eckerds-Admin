import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, Route} from '@angular/router';
import {UserPriceCheck} from '../price-check/priceCheck';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {PriceService} from '../price.service';
import {RefillService} from '../refill.service';
import {TransferService} from '../transfer.service';
import {AppComponent} from '../app.component';

@Component({
	selector: 'app-show-detail-price',
	templateUrl: './show-detail-price.component.html',
	styleUrls: ['./show-detail-price.component.css']
})
export class ShowDetailPriceComponent implements OnInit {

	constructor(private priceService: PriceService,private refillService: RefillService,private transferService: TransferService, private router: Router,
		private route: ActivatedRoute) { }
	price:UserPriceCheck [];

	ngOnInit() {
		this.getSingleEmployee();
	}

	getSingleEmployee(){
		var id = this.route.snapshot.params['id'];
		this.priceService
		.getUserPriceRequest(id)
		.subscribe(price =>{
			this.price = price[0];
		})
	};

}
