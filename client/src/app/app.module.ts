import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefillPrescriptionComponent } from './refill-prescription/refill-prescription.component';
import { PriceCheckComponent } from './price-check/price-check.component';
import { TransferPrescriptionComponent } from './transfer-prescription/transfer-prescription.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AllRecordsComponent } from './all-records/all-records.component';
import { FilterByLocationComponent } from './filter-by-location/filter-by-location.component';
import { ShowDetailTransferComponent } from './show-detail-transfer/show-detail-transfer.component';
import { ShowDetailRefillComponent } from './show-detail-refill/show-detail-refill.component';
import { ShowDetailPriceComponent } from './show-detail-price/show-detail-price.component';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import { ChartistModule } from 'ng-chartist';




@NgModule({
  declarations: [
  AppComponent,
  RefillPrescriptionComponent,
  PriceCheckComponent,
  TransferPrescriptionComponent,
  LoginComponent,
  DashboardComponent,
  AllRecordsComponent,
  FilterByLocationComponent,
  ShowDetailTransferComponent,
  ShowDetailRefillComponent,
  ShowDetailPriceComponent,

  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  FilterPipeModule,
  NgxPaginationModule,
  BrowserAnimationsModule,
  ChartistModule,
  ToastrModule.forRoot({
    timeOut: 1000,
  })
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
