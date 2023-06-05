import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FormsModule } from '@angular/forms';
import { AddOrderComponent } from './add-order/add-order.component';

const routes:Routes =[
  { path: 'app-order-history', component: OrderHistoryComponent },
  { path: '',   redirectTo: '/app-order-history', pathMatch: 'full' }, 
]

@NgModule({
  declarations: [
    AppComponent,
    OrderHistoryComponent,
    AddOrderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
