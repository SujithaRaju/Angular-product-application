import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ConverToSpace } from './shared/convert-to-space.pipe';
import { StarComponentComponent } from './shared/star-component/star-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponetComponent } from './home/welcome-componet.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-details-guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConverToSpace,
    StarComponentComponent,
    ProductDetailsComponent,
    WelcomeComponetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent},
      { 
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
      { path: 'welcome', component: WelcomeComponetComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
