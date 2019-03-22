import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, Route} from '@angular/router';
import {UserPriceCheck} from '../price-check/priceCheck';
import {UserRefill} from '../refill-prescription/refillPrescription';
import {UserTransferPrescription} from '../transfer-prescription/transferPrescription';
import {PriceService} from '../price.service';
import {RefillService} from '../refill.service';
import {TransferService} from '../transfer.service';
import {AppComponent} from '../app.component';
import Swal from 'sweetalert2';


@Component({
	selector: 'app-show-detail-refill',
	templateUrl: './show-detail-refill.component.html',
	styleUrls: ['./show-detail-refill.component.css']
})
export class ShowDetailRefillComponent implements OnInit {

	constructor(private priceService: PriceService,private refillService: RefillService,private transferService: TransferService, private router: Router,
		private route: ActivatedRoute) { }

	refill: RefillService[];
	ngOnInit() {
		this.getSingleEmployee();
	}

	getSingleEmployee(){
		var id = this.route.snapshot.params['id'];
		this.refillService
		.getUserRefillRequest(id)
		.subscribe(price =>{
			this.refill = price[0];
		})
	}

	status(refill_id, status){
		this.refillService
		.updateStatus(refill_id, status)
		.subscribe(()=>{
			this.getSingleEmployee();
			if(status==1){
				Swal.fire("", "Successfully Unpublished", "success")
			}else{
				Swal.fire("", "Successfully Published", "success")
			}
		});
	}
}
