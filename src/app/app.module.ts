import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Appproduct} from './product.component';
import {AppInventory} from './Inventory.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ProductService} from './products.service';

const appRoutes: Routes = [
  {path: 'Product', component: Appproduct},
  {path: 'Inventory', component: AppInventory},
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes), HttpModule ],
  declarations: [ AppComponent, Appproduct, AppInventory ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
