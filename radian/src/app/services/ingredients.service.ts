import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/ingredients"

  getAllInventory(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.baseUrl)
  }

  updateInventoryAmount(id: number, newAmount:number): Observable<Ingredients> {
    return this.http.put<Ingredients>(`${this.baseUrl}/${id}`, {amount: newAmount})
  }

}
