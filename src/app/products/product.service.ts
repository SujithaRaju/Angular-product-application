import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./products";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    constructor(private http: HttpClient){
        
    }
 
    private productUrl='http://localhost:8080/products';

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productUrl}`).pipe(
            tap(data=>console.log('All',JSON.stringify(data))),
            catchError(this.handlerError));
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
    }

    private handlerError(err: HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage=`error occured ${err.error.message}`;
        }else{
            errorMessage=`server retured code ${err.status}, error message is .${err.message}`
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }


}