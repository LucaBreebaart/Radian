import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { Ingredients } from '../models/ingredients.model';
import { Products } from '../models/products.model';

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

  // getIngredientsByRecipeId(id: number): Observable<Ingredients[]> {
  //   const url = `${this.baseUrl}/${id}/products`
  //   return this.http.get<Products[]>(url).pipe(
  //     map(products => products.map(product => product.ingredient))
  //   )
  // }

  updateRecipeById(id: number, updatedRecipe: Recipe): Observable<any> {
    const url = `${this.baseUrl}/${id}`
    return this.http.put(url, updatedRecipe)
  }

  craftRecipe(recipe: Recipe): Observable<Recipe> {
    var craftUrl = this.baseUrl + "/" + recipe.id + "/craft"
    return this.http.put<Recipe>(craftUrl, {amount: recipe.amountCrafted +1, products: recipe.products})
  }

  // sendCraftabilityData(data: any): Observable<any>{

  // }
}
