import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettlementComponent } from './settlement/settlement.component';
import { SettlementItemComponent } from './settlement/settlement-item/settlement-item.component';
import { SettlementNewItemComponent } from './settlement/settlement-new-item/settlement-new-item.component';
import {SettlementService} from './settlement/services/settlement-service.service' 

@NgModule({
  declarations: [
    AppComponent,
    SettlementComponent,
    SettlementItemComponent,
    SettlementNewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SettlementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
