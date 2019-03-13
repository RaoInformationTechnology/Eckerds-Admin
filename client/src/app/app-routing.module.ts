import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PriceCheckComponent} from './price-check/price-check.component';
import {RefillPrescriptionComponent} from './refill-prescription/refill-prescription.component';
import {TransferPrescriptionComponent} from './transfer-prescription/transfer-prescription.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllRecordsComponent} from './all-records/all-records.component';
const routes: Routes = [
{
	path: '',
	pathMatch: "full",
	redirectTo: "login"
},
{
	path: 'dashboard',
	component: DashboardComponent,
	canActivate: [AuthGuard]
},	
{
	path: 'price',
	component: PriceCheckComponent,
	canActivate: [AuthGuard]
},
{
	path: 'refill',
	component: RefillPrescriptionComponent,
	canActivate: [AuthGuard]
},
{
	path: 'transfer',
	component: TransferPrescriptionComponent,
	canActivate: [AuthGuard]
},
{
	path: 'allRecords',
	component: AllRecordsComponent,
	canActivate: [AuthGuard]
},
{
	path: 'login',
	component: LoginComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
