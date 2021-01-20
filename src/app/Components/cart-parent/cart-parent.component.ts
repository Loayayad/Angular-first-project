import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { CartChildComponent } from '../cart-child/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit {
  CategoryList: ICategory[]=[];
  subscribtion: Subscription|null=null;
  SelectedCatID:number=1;
  OrderTotalPriceFromOutput:number=0;
  listOfPurchase: {
    productName:string,
    totalPrice:number,
    productCount:number,
    
  }[]=[];
  
  @ViewChild ('ClientName') ClientNameInput: ElementRef= new ElementRef('input');

  @ViewChild (CartChildComponent) DetailsComponentRef: any;

  constructor(private catService: CategoryService) {
  //   this.CategoryList= [{ID: 1, Name:'Laptops'},
  //   {ID: 2, Name:'Tablets'},
  //   {ID: 3, Name:'Mobiles'}
  //  ];
   }

  ngOnInit(): void {
    this.subscribtion= this.catService.getAllProducts().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.CategoryList=response;
      },
      (err)=>{console.log(err)}
    );

    console.log("After subscribe")
  }
  
  ngAfterViewInit(): void {
    console.log(this.ClientNameInput?.nativeElement.value);
    this.ClientNameInput.nativeElement.style.backgroundColor='red';
    this.ClientNameInput.nativeElement.style.fontStyle ='italic';

    let childComponentRef: CartChildComponent= this.DetailsComponentRef;
    this.listOfPurchase = childComponentRef.OrderPurshase;
  }

  onTotalPriceChanged(TotalPrice: number){
    this.OrderTotalPriceFromOutput=TotalPrice;
  }

}
