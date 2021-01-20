import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightedDirective } from './Directives/highlighted.directive';
import { BlurDirective } from './Directives/blur.directive';
import { FormatCreditCardPipe } from './Pipes/format-credit-card.pipe';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { CartChildComponent } from './Components/cart-child/cart-child.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    HighlightedDirective,
    BlurDirective,
    FormatCreditCardPipe,
    CartParentComponent,
    CartChildComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ProductComponent,
    AddProductComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
