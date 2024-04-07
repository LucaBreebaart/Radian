import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/ingredients"

  getAllInventory(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.baseUrl)
  }

  updateInventoryAmount(id: number, newAmount: number): Observable<Ingredients> {
    return this.http.put<Ingredients>(`${this.baseUrl}/${id}`, { amount: newAmount })
  }

  addIngredient(ingredientData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, ingredientData);
  }

  // getIngredient(id: number): Observable<Ingredients> {
  //   return this.http.get<Ingredients>(`${this.baseUrl}/${id}`);
  // }

  updateIngredient(ingredient: Ingredients): Observable<any> {
    const url = `${this.baseUrl}/byId/${ingredient.id}`;
    return this.http.put(url, ingredient);
  }
  
  getIngredient(id: number): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.baseUrl}/byId/${id}`);
  }

  getIngredientsByLocation(location: string): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(`http://localhost:3000/ingredients/${location}`);
  }

}
