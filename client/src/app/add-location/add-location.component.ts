import { Component, OnInit } from '@angular/core';
import {NewLocation} from './newLocation';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PriceService} from '../price.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private router: Router, private priceService: PriceService) { }

  ngOnInit() {
  }

  newLocation = new NewLocation();

  addLocation(){
      this.priceService
        .addLocation(this.newLocation)
        .subscribe();
  }
}
