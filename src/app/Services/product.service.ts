import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ProductList: IProduct[]=[];
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable <IProduct[]>
  {
    return this.http.get<IProduct[]>(`${environment.API_URL}/products`);
  }

  getCategoryByID(catID: number): Observable <IProduct[]>
  {
    return this.http.get<IProduct[]>(`${environment.API_URL}/products?CateogryID=${catID}`);
  }

  getProductByID(pID: number): Observable <IProduct>
  {
    return this.http.get<IProduct>(`${environment.API_URL}/products/${pID}`);
  }

  addProduct(prd: IProduct){
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.http.post(`${environment.API_URL}/products`, prd, httpOptions);
  }
}
