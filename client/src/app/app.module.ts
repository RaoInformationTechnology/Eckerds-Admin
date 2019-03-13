import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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



@NgModule({
  declarations: [
  AppComponent,
  RefillPrescriptionComponent,
  PriceCheckComponent,
  TransferPrescriptionComponent,
  LoginComponent,
  DashboardComponent,
  AllRecordsComponent,

  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  FilterPipeModule
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
