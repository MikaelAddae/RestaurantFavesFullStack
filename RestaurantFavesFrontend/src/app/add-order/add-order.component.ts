import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  displayForm:boolean = false;
  @Input() newOrder:Order = {} as Order;
  @Output() changed = new EventEmitter<Order>();

  addOrder(){
    this.changed.emit(this.newOrder);
    this.toggleDisplay();
  }
  
  toggleDisplay(){
    this.displayForm = !this.displayForm;
  }


}
