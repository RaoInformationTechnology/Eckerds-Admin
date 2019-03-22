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
	selector: 'app-show-detail-transfer',
	templateUrl: './show-detail-transfer.component.html',
	styleUrls: ['./show-detail-transfer.component.css']
})
export class ShowDetailTransferComponent implements OnInit {

	constructor(private priceService: PriceService,private refillService: RefillService,private transferService: TransferService, private router: Router,
		private route: ActivatedRoute) { }
	transfer:UserTransferPrescription [];

	ngOnInit() {
		this.getSingleEmployee();
	}

	getSingleEmployee(){
		var id = this.route.snapshot.params['id'];
		this.transferService
		.getUserTransferRequest(id)
		.subscribe(price =>{
			this.transfer = price[0];
		})
	}

	status(tp_id, status){
		console.log(tp_id + status);
		this.transferService
		.updateStatus(tp_id, status)
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
