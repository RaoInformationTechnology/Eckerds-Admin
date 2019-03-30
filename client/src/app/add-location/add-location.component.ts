import { Component, OnInit } from '@angular/core';
import {NewLocation} from './newLocation';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PriceService} from '../price.service';
import Swal from 'sweetalert2';
import {AllLocation} from './allLocation';
declare var $:any;
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  private updateSubscription: Subscription;
  allLocation: AllLocation[];

  constructor(private router: Router, private priceService: PriceService) { }

  ngOnInit() {
    this.allLocations();
  }

  newLocation = new NewLocation();

  addLocation(newLocation){
    console.log(newLocation);
    this.priceService
    .addLocation(newLocation)
    .subscribe(()=> 
      this.goBack()
      );
    console.log(newLocation);
    Swal.fire("", "Successfully Added", "success"); 
    $('#myModal').modal('hide');
  }

  goBack(){
    this.router.navigate(['/addLocation']);
  }

  allLocations(){
    this.priceService.newLocation().subscribe(
      (res: AllLocation[]) => {
        this.allLocation = res;
      })
  }
}
