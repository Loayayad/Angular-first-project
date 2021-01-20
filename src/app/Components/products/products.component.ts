import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers.enum';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount : DiscountOffers;
  StoreInfo: Store;
  Selectedbranch=0;
  ClientName: string;
  ClientNumber: number;
  ProductList: IProduct[];
  PurshaseDate?: number;
  CreditCardNumber:string;

  constructor() {
    this.Discount = DiscountOffers.Discount15;
    this.StoreInfo = new Store ('ayad',["Cairo","Giza","Alexandria"],'https://picsum.photos/150');
    this.ClientName = "Loay";
    this.ClientNumber = 0;
    this.StoreInfo.IsPurshased = true;
    this.PurshaseDate = Date.now();
    this.CreditCardNumber ='';
    this.ProductList =
    [
      {ID: 5, Name:'Mobile',Quantity:5,Price:1000,Img:'https://picsum.photos/200',CateogryID:2},
      {ID: 2, Name:'LapTop',Quantity:1,Price:2000,Img:'https://picsum.photos/200/',CateogryID:1},
      {ID: 4, Name:'Computer',Quantity:7,Price:7000,Img:'https://picsum.photos/200',CateogryID:4},
      {ID: 7, Name:'PC',Quantity:0,Price:10000,Img:'https://picsum.photos/200',CateogryID:7},
    ];

   }

   ToggleStore(){
     this.StoreInfo.IsPurshased =!this.StoreInfo.IsPurshased ;
   }

   DecreaseProduct(product:IProduct){
     product.Quantity -=1;
  }

}
