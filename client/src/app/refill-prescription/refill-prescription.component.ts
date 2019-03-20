import { Component, OnInit } from '@angular/core';
import {UserRefill} from './refillPrescription';
import {RefillService} from '../refill.service';

@Component({
  selector: 'app-refill-prescription',
  templateUrl: './refill-prescription.component.html',
  styleUrls: ['./refill-prescription.component.css']
})
export class RefillPrescriptionComponent implements OnInit {

  usersRefill :  UserRefill[];
  error = '';
  success = '';
  refillRequest: any;
  userFilter: UserRefill = {location: ''};

  constructor(private refillService: RefillService) { }

  ngOnInit() {
  	this.getRefillList();
  }

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

  deleteRefillPrescription(refill_id){
    this.refillService
    .deleteRefillPrescription(refill_id)
    .subscribe(() => {
      this.getRefillList();
    })
  }

  status(refill_id, status){
    console.log(refill_id + status);
    this.refillService
    .updateStatus(refill_id, status)
    .subscribe(()=>{
      this.getRefillList();
    });
  }
}
