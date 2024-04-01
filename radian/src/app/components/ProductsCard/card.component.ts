import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'productsCard',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class productsCard {

  constructor (private service: RecipeService) {}

  @Input() recipes: Recipe = {

    id: 0,
    name: "Product Name",
    img: "https://shorturl.at/dswR5",
    price: 99,
    description: "this is a description",
    amountCrafted: 0,
  
  }

// Get all recipes
  // recipes: Recipe[] = []

  // ngOnInit(){
  //   this.getRecipes()
  // }

  // getRecipes(){
  //   this.service.getAllRecipes().subscribe((data) => {
  //     this.recipes = data
  //     console.log(data)
  //   })
  // }
}




//   selectedRecipe?: Recipe

//   setSelectedRecipe(recipe: Recipe){
//     this.selectedRecipe = recipe


//   }

//   checkCraftablity() {
    
//     this.selectedRecipe!.isCraftable = true;

//     this.selectedRecipe!.products?.forEach((product) =>{

//       if (product.amount > product.ingredient.stock) {

//         this.selectedRecipe!.isCraftable = false
//         console.log('not craftable' + product.ingredient.name)
//         return
//       }
//     });
//   }
// }
