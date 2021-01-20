import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prd:IProduct|null=null;
  prdf:IProduct|null=null;
  prdID:number=0;
  prdIDParam:string|null=null;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private prdService: ProductsService,
    private location: Location) { }

  ngOnInit(): void {

   //let prdIDParam:string|null = this.activatedRoute.snapshot.paramMap.get('pID');
   this.activatedRoute.paramMap.subscribe((params :ParamMap)=>{
        this.prdIDParam= params.get('pID');
   });
   this.prdID= (this.prdIDParam)? parseInt(this.prdIDParam) : 0;
   //this.prd= 
   let product:IProduct|null=this.prdService.getProductByID(this.prdID);
   if(product != null){
     this.prd=product ;
  }
}

  goBack(){
    this.location.back();
  }

  nextProduct(){
    this.router.navigate(['/Product', (this.prdID +1)]);
  }

  previousProduct(){
    this.router.navigate(['/Product', (this.prdID -1)]);
  }

}
