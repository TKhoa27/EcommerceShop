import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiURL)
  }
}
