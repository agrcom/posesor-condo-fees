import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettlementComponent } from './settlement/settlement.component';
import { SettlementItemComponent } from './settlement/settlement-item/settlement-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SettlementComponent,
    SettlementItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
