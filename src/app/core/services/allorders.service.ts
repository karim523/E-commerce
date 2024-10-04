import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllordersService {
  constructor(private readonly _HttpClient: HttpClient) {}

  getAllOrders(id: string ): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/api/v1/orders/user/${id}`
    );
  }
}
