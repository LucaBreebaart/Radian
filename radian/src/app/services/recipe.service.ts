import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/recipes"

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl)
  }
  
  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Recipe>(url)
  }

  updateRecipeById(id: number, updatedRecipe: Recipe): Observable<any> {
    const url = `${this.baseUrl}/${id}`
    return this.http.put(url, updatedRecipe)
  }
}
