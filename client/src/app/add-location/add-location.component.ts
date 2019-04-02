import { Component, OnInit } from '@angular/core';
import {AllLocation} from './newLocation';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PriceService} from '../price.service';
import Swal from 'sweetalert2';
import {NewLocation} from './allLocation';
declare var $:any;
import { Observable, interval, Subscription, of } from 'rxjs';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  private updateSubscription: Subscription;
  allLocation: AllLocation[];
  noOfLocation: any;

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.allLocations();
  }

  newLocation = new NewLocation();

  addLocation(newLocation){
    console.log(newLocation);
    this.locationService
    .addLocation(newLocation)
    .subscribe();
    console.log(newLocation);
    Swal.fire("", "Successfully Added", "success"); 
    $('#myModal').modal('hide');
    this.updateSubscription = interval(1000).subscribe(
      (val) => {
        this.allLocations();
      });
  }

  allLocations(){
    this.locationService.newLocation().subscribe(
      (res: AllLocation[]) => {
        this.allLocation = res;
        this.noOfLocation = this.allLocation.length;
      })
  }

  deleteLocation(id){
    console.log();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Location has been removed!',
          'success'
          )
        this.locationService
        .deleteLocation(id)
        .subscribe(() => {
          this.allLocations();
        })
      }
    })
  }
}