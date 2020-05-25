import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import the components for each view to map for routing
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';
import { ReqQuoteComponent } from './req-quote/req-quote.component';
import { GServicesComponent } from './gservices/gservices.component';
import { GProductsComponent } from './gproducts/gproducts.component';
import { GContactsComponent } from './gcontacts/gcontacts.component';
import { AboutUsComponent } from './about-us/about-us.component';

// Specify browser paths and correspondig view components
const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component: AppPageHomeComponent},
  {path: 'Quote', component: ReqQuoteComponent},
  {path: 'Services', component: GServicesComponent},
  {path: 'Products', component: GProductsComponent},
  {path: 'Contacts', component: GContactsComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
