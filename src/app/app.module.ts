import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChainsoService } from './chain.so.service';
import { BitcoinjsService } from './bitcoinjs.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChainsoService,
    BitcoinjsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
