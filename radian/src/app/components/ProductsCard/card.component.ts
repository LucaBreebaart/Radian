import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
// import { Ingredients } from '../../models/ingredients.model';
import { Products } from '../../models/products.model';

interface Ingredients {
  id?: number;
  name: string;
  sku: string;
  category: string;
  icon: string;
  description: string;
  durban: number;
  pretoria: number;
  capeTown: number;
}
@Component({
  selector: 'productsCard',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class productsCard {

  selectedLocation!: keyof Ingredients; 
  selectedRecipe: Recipe | undefined;

  constructor(
    private router: Router,
    private recipeservice: RecipeService,
    private locationService: LocationService
  ) {
    this.selectedLocation = this.locationService.getSelectedLocation() as keyof Ingredients;
  }

  navToEditProduct(id: number) {
    this.router.navigate(['editproduct', id]);
  }

  @Input() recipes: Recipe = {

    id: 0,
    name: "Product Name",
    img: "https://shorturl.at/dswR5",
    price: 99,
    description: "this is a description",
    amountCrafted: 0,
  
  }
  recipe: Recipe[] = []

  ngOnInit(){
    this.getRecipes()
  }

  getRecipes(){
    this.recipeservice.getAllRecipes().subscribe((data) => {
      this.recipe = data
      console.log("This is the data youre looking for ", data)
    })
  }

  // selectedRecipe?: Recipe

  setSelectedRecipe(recipe: Recipe) {
    
    this.selectedRecipe = recipe

    console.log("log", this.selectedRecipe)

    this.checkCraftability()
  }

  checkCraftability() {
    this.selectedRecipe!.isCraftable = true;

    this.selectedRecipe!.products?.forEach((product) => {
      let selectedLocationAmount = 0;

      switch (this.selectedLocation) {
        case 'durban' :
          selectedLocationAmount = product.ingredient.durban;
          break;
        case 'pretoria' :
          selectedLocationAmount = product.ingredient.pretoria;
          break;
        case 'capeTown' :
          selectedLocationAmount = product.ingredient.capeTown;
          break;    
      }

      if (product.amount > selectedLocationAmount) {
        this.selectedRecipe!.isCraftable = false;
        console.log('Not Craftable');
        return;
      } else {
        console.log(selectedLocationAmount)
      }

    })
  }

  // checkCraftability() {
  //   this.selectedRecipe!.isCraftable = true

  //   this.selectedRecipe!.products?.forEach((product) => {

  //     if (product.amount > product.ingredient.selectedLocation) {
  //       this.selectedRecipe!.isCraftable = false
  //       console.log('Not Craftable' + product.ingredient.capeTown )
  //       return
  //     } else {
  //       console.log(product.ingredient)
  //     }
  //   })
  // }

  craftNewRecipe(recipe: Recipe) {
    console.log(2)
    if (this.selectedRecipe!.id == recipe.id) {
      this.recipeservice.craftRecipe(recipe).subscribe((data) => {
        this.selectedRecipe! = data
        
      })
    }
    
  }

} 


  // isValidIngredientKey(key: string): key is keyof Ingredients {
  //   return key.toLowerCase() === 'durban' || key.toLowerCase() === 'pretoria' || key.toLowerCase() === 'capetown';
  // }


  // checkCraftability() {
  //   if (!this.selectedRecipe) return;
  //   this.selectedRecipe.isCraftable = true;
  //   this.selectedRecipe.products?.forEach((product: Products) => {
  //     const locationKey = this.selectedLocation.toLowerCase();
  //     if (this.isValidIngredientKey(locationKey) && product.amount > product.ingredient[locationKey]) {
  //       this.selectedRecipe.isCraftable = false;
  //       console.log('Not Craftable ' + product.ingredient[locationKey]);
  //       return;
  //     } else {
  //       console.log(product.ingredient);
  //     }
  //   });
  // }

  // craftNewRecipe(recipe: Recipe) {
  //   if (this.selectedRecipe!.id == recipe.id) {
  //     this.selectedRecipe!.products?.forEach((product) => {
  //       product.ingredient[this.selectedLocation.toLowerCase()] -= product.amount
  //     })
  //     this.selectedRecipe!.amountCrafted += 1;

  //     this.recipeservice.craftRecipe(recipe).subscribe((data) => {
  //       this.selectedRecipe! = data;
  //     });
  //   }
  // }