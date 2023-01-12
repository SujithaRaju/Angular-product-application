import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
  errorMessage = '';
  sub!: Subscription;
 
  constructor(private productService: ProductService){

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  products : IProduct[] = [];
  filteredProducts : IProduct [] =[];
  
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  pageTitle : string ="Product List";
  imageWidth : number=50;
  imageMargin: number =2;
  showImage: boolean = false;
  private _listFilter: string ='';

  get listFilter() : string{
    return this._listFilter;
  }

  set listFilter(value : string){
    this._listFilter=value;
    this.filteredProducts=this.performFilter(value);
  }

  performFilter(filterBy: string):IProduct[]{
     filterBy = filterBy.toLowerCase();
     return this.products.filter((product : IProduct)=> product.productName.toLowerCase().includes(filterBy));
  }

  
  toggleImage(): void {
    this.showImage =!this.showImage
  }

  clickedEvent(message: string ):void{
    this.pageTitle='Product : '+message;
  }
}
