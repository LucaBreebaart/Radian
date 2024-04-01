import { Component, NgModule } from '@angular/core';
import { productsCard } from '../../components/ProductsCard/card.component'; 
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ProductsPage',
  standalone: true,
  imports: [productsCard, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css', '../../app.component.css']
})
export class ProductsPage {

  constructor(private service: RecipeService) {}

  recipeList: Recipe[] = [
    {
      id: 1,
      name: "Dummy",
      img: "Dummy",
      price: 99,
      description: "Dummy",
      amountCrafted: 0
    }
  ];

  ngOnInit() {
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipeList = data
    })
  }

}

// @NgModule({
//   declarations: [
//     ProductsPage,
    
//   ],

//   imports: [
//     CommonModule,
//     productsCard
//   ]
// })
// export class ProductModule { }