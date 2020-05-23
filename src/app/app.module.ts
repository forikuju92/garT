import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReqQuoteComponent } from './req-quote/req-quote.component';
import { GServicesComponent } from './gservices/gservices.component';
import { GProductsComponent } from './gproducts/gproducts.component';
import { GContactsComponent } from './gcontacts/gcontacts.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ReqQuoteComponent,
    GServicesComponent,
    GProductsComponent,
    GContactsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ReqQuoteComponent,
    GServicesComponent,
    GProductsComponent,
    GContactsComponent,
    AboutUsComponent]
})
export class AppModule { }
