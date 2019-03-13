import { Component, OnInit } from '@angular/core';
import {UserTransferPrescription} from './transferPrescription';
import {TransferService} from '../transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transfer-prescription',
  templateUrl: './transfer-prescription.component.html',
  styleUrls: ['./transfer-prescription.component.css']
})
export class TransferPrescriptionComponent implements OnInit {

	usersTransferPrescription :  UserTransferPrescription[];
	error = '';
	success = '';
  transferRequest: any;
  userFilter: UserTransferPrescription = {location: ''};
  
  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit() {
  	this.getTransferList();
  }

  getTransferList(): void{
  	this.transferService.getAll().subscribe(
      (res: UserTransferPrescription[]) => {
        this.usersTransferPrescription = res;
      },
      (err) => {
        this.error = err;
      });
  }

  deleteTransferPrescription(tp_id){
    this.transferService
    .deleteTransferPrescription(tp_id)
    .subscribe(() => {
      this.getTransferList();
      this.router.navigate(['home']);
    })
  }
}
