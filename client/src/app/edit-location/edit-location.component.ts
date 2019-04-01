import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationService} from '../location.service';
import {NewLocation} from '../add-location/allLocation';
import {AllLocation} from '../add-location/newLocation';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-edit-location',
	templateUrl: './edit-location.component.html',
	styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

	constructor(private router: Router,private route: ActivatedRoute,
		private locationService: LocationService) { }

	ngOnInit() {
		this.getSingleEmployee();
	}
	model = new NewLocation();
	id = this.route.snapshot.params['id'];

	getSingleEmployee(){

		this.locationService
		.getSingleLocation(this.id)
		.subscribe(location =>{
			this.model = location[0];
			console.log(this.model);
		})
	};

	updateLocation(){
		console.log(this.model);
		this.locationService
		.updateLocation(this.model)
		.subscribe(()=> this.goBack());
		Swal.fire("", "Successfully Updated", "success")
	}

	goBack(){
		this.router.navigate(['/addLocation']);
	}

}
