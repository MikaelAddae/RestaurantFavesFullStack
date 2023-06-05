import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  url:string = "https://localhost:7270/api/Orders"
  constructor(private http:HttpClient) { }

  getAllOrders():Observable<any>{
    return this.http.get<Order[]>(this.url);
  }

  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.url, order)
  }

  deleteOrder(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id);
  }

}
