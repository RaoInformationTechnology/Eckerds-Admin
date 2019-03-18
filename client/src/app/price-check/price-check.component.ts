import { Component, OnInit } from '@angular/core';
import {UserPriceCheck} from './priceCheck';
import {PriceService} from '../price.service';
import {Router,Params} from '@angular/router';


@Component({
  selector: 'app-price-check',
  templateUrl: './price-check.component.html',
  styleUrls: ['./price-check.component.css']
})
export class PriceCheckComponent implements OnInit {

  usersPriceCheck :  UserPriceCheck[];
  error = '';
  success = '';
  priceRequest: any;
  userFilter: UserPriceCheck = {location: ''};
  

  constructor(private priceService: PriceService,  private router: Router) { }

  ngOnInit() {
  	this.getPriceCheck();
  }

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

  deletePriceCheckRequest(pc_id){
    this.priceService
    .deletePriceCheckRequest(pc_id)
    .subscribe(() => {
      this.getPriceCheck();
    })
  }
}
