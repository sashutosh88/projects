import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
// import {appService} from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductModel } from './productmodel';

@Component({
  selector: 'my-first-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  iproduct: IProduct[];
  productModel: Array<ProductModel> = new Array<ProductModel>();
  constructor(private _product: ProductService) {

  }
  appTitle: string = 'Welcome';
  ngOnInit(): void {
    localStorage.setItem('data', 'Me Data');
  }

  private LoadProducts() {
    this._product.getproducts()
      .subscribe((res) => {
        this.productModel = res.json();
      }
      );

    alert(localStorage.getItem('data'));
  }
}