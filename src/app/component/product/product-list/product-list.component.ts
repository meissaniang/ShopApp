import { ProductsService } from './../../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject<void>();
  //products!: Product[];
  products$!: Observable<Product[]> ;

  // product: Object[] = [

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    //  this.getProduct();
     this.products$ = this.productService.getProducts();
  }

  getProduct() {
    this.productService.getProducts()
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: Product[]) => {
        // this.products = data;
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
