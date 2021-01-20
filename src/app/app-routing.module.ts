import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

const routes: Routes = [
  {path: 'Home', component: ProductsComponent},
  {path: 'About Us', component: AboutUsComponent},
  {path: 'Contact Us', component: ContactUsComponent},
  {path: 'Products', component:CartParentComponent},
  {path: 'Product/:pID',component:ProductComponent},
  {path: 'NewProduct', component: AddProductComponent},
  {path: 'Login', component: UserLoginComponent},
  {path: '', redirectTo: '/Home' , pathMatch:'full'},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
