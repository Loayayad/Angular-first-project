import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private ProductList: IProduct[] = [];

  constructor() {
    this.ProductList = [
      { ID: 1, Name: 'Lenvo thinpad X230', Price: 100, Quantity: 10, CateogryID: 1 },
      { ID: 2, Name: 'Lenvo Ideapad', Price: 200, Quantity: 20, CateogryID: 1 },
      { ID: 3, Name: 'MacBook', Price: 300, Quantity: 30, CateogryID: 1 },

      { ID: 4, Name: 'Samsung Tab', Price: 150, Quantity: 5, CateogryID: 2 },
      { ID: 5, Name: 'Lenvo Tab', Price: 250, Quantity: 15, CateogryID: 2 },
      { ID: 6, Name: 'IPad', Price: 350, Quantity: 25, CateogryID: 2 },

      { ID: 7, Name: 'Samsung S10', Price: 1000, Quantity: 10, CateogryID: 3 },
      { ID: 8, Name: 'Smasung note 10', Price: 2000, Quantity: 20, CateogryID: 3 },
      { ID: 9, Name: 'Iphone 12', Price: 3000, Quantity: 30, CateogryID: 3 },
    ]
  }

  getAllProducts(): IProduct[] {
    return this.ProductList;
  }

  getProductsByCatID(CatID: number): IProduct[] {
    return this.ProductList.filter((prd) => {
      return prd.CateogryID == CatID;
    });
  }

  getProductByID(PrdID: number): IProduct | null {
    let foundPrd = (this.ProductList.find((prd) =>
      prd.ID == PrdID
    ));

    return (foundPrd) ? foundPrd : null;
  }
}
