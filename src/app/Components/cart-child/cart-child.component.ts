import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit,OnChanges {
  ProductList: IProduct[]=[];
  ProductListOfSelCat: IProduct[]=[];
  subscribtion: Subscription|null=null;
  OrderTotalPrice:number=0;
  OrderPurshase: {
    productName:string,
    totalPrice:number,
    productCount:number,
    
  }[]=[];

  @Input() InputCatID: number=1;
  @Output () TotalPriceChanged : EventEmitter<number> 
            = new EventEmitter <number>();

  constructor(private PrdService:ProductsService,
    private ProductService:ProductService,
    private router: Router) {
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log(this.InputCatID);
    //this.ProductListOfSelCat=this.PrdService.getProductsByCatID(this.InputCatID);
        this.subscribtion= this.ProductService.getCategoryByID(this.InputCatID).subscribe(
      (response)=>{
        console.log("in subscribe");
        this.ProductListOfSelCat=response;
      },
      (err)=>{console.log(err)}
    );

    console.log("After subscribe")
  }

  ngOnInit(): void {

  }

  CalcTotalPrice(prd:IProduct, prdPrice:number, PrdCount: any){
    console.log(PrdCount);
    console.log(prdPrice);
    this.OrderTotalPrice+= (prdPrice*parseInt(PrdCount));
    
    prd.Quantity -=<number>PrdCount;
    let purshasObject = {productName:prd.Name,totalPrice:prd.Price,productCount:PrdCount}
    this.OrderPurshase.push(purshasObject);

    // Fire event TotalPriceChanged
    this.TotalPriceChanged.emit(this.OrderTotalPrice);
  }

  ngAfterViewInit(): void {
    console.log(this.OrderPurshase)
  }

  viewProduct(ProductID:number){
    this.router.navigate(['/Product', ProductID]);
  
     // this.router.navigate([`/ProductDetails/${ProductID}`]);

    // this.router.navigate(['/ProductDetails', ProductID]).then(()=>{
    //   console.log('Navigation Completed')
    // });
  }
  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }

}
