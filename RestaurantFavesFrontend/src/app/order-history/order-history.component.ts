import { Component } from '@angular/core';
import { Order } from '../order';
import { RestaurantFavesService } from '../restaurant-faves.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {

  orders:Order[]=[];
  newOrder:Order = {} as Order;

  constructor(private rFService:RestaurantFavesService){
    this.rFService.getAllOrders().subscribe(
      (result)=>{
        this.orders = result;
      }
    )
  }

  addNewOrder():void
  {
    this.rFService.addOrder(this.newOrder).subscribe(
      (result) =>
      {
        this.orders.push(this.newOrder);
        this.newOrder = {} as Order;
      }
    )
  }

}
