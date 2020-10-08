import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8090/api/customers';

  constructor(private httpClient: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
