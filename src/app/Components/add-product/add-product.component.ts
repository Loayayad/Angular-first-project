import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  CategoryList: ICategory[]=[];
  subscribtion: Subscription|null=null;
  prd: IProduct;
  SelectedCatID:number=1;
  constructor(private catService: CategoryService,
    private ProductService: ProductService
    , private router: Router) {
      this.prd = {id:5,ID: 100, Name: '', Price: 0, Quantity: 0,CateogryID: 1};
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

  addProduct(){
    // const prd: IProduct = {ID: 0, Name: 'Assiut PD-40 Test', Quantity: 37, Price: 100};
    console.log(this.prd);
    this.ProductService.addProduct(this.prd).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/Products']);
      },(err)=>(console.log(err))
    );
  }

}
