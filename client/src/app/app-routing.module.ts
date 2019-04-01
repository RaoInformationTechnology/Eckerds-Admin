import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PriceCheckComponent} from './price-check/price-check.component';
import {RefillPrescriptionComponent} from './refill-prescription/refill-prescription.component';
import {TransferPrescriptionComponent} from './transfer-prescription/transfer-prescription.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllRecordsComponent} from './all-records/all-records.component';
import {FilterByLocationComponent} from './filter-by-location/filter-by-location.component';
import {ShowDetailPriceComponent} from './show-detail-price/show-detail-price.component';
import {ShowDetailTransferComponent} from './show-detail-transfer/show-detail-transfer.component';
import {ShowDetailRefillComponent} from './show-detail-refill/show-detail-refill.component';
import {AddLocationComponent} from './add-location/add-location.component';
import {EditLocationComponent} from './edit-location/edit-location.component';
const routes: Routes = [
{
	path: '',
	pathMatch: "full",
	redirectTo: "dashboard"
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
{
	path: 'filterByLocation',
	component: FilterByLocationComponent,
	canActivate: [AuthGuard]
},
{
	path: 'showDetailPrice/:id',
	component: ShowDetailPriceComponent,
	canActivate: [AuthGuard]
},
{
	path: 'showDetailTransfer/:id',
	component: ShowDetailTransferComponent,
	canActivate: [AuthGuard]
},
{
	path: 'showDetailRefill/:id',
	component: ShowDetailRefillComponent,
	canActivate: [AuthGuard]
},
{
	path: 'addLocation',
	component: AddLocationComponent,
	canActivate: [AuthGuard]
},
{
	path: 'editLocation/:id',
	component: EditLocationComponent,
	canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
