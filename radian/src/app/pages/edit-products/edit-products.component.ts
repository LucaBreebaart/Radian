import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css', '../../app.component.css']
})
export class EditProductsComponent implements OnInit {

  recipe: Recipe | undefined
  ingredientNames: string[] = []
  editProductForm: FormGroup

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder
  ) {
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: [''],
      price: [0, Validators.required],
      description: ['', Validators.required],
      amountCrafted: [0, Validators.required],
      products: this.formBuilder.array([])  
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.recipeService.getRecipeById(id).subscribe(recipe => {
        console.log('API Response:', recipe)
        if (recipe) {
          this.recipe = recipe;
          
          // if (recipe.products) {
          //   // this.patchProductsArray(recipe.products);
          //   this.ingredientNames = this.getIngredientNames(recipe.products);
          // }

          this.editProductForm.patchValue({
            name: recipe.name,
            img: recipe.img,
            price: recipe.price,
            description: recipe.description,
            amountCrafted: recipe.amountCrafted,
            products: recipe.products
          });

          
          // this.products.products = this.products.products?.map(product => product.ingredient)
          // this.recipeService.getIngredientsByRecipeId(id).subscribe(ingredients => {
          //   this.products.ingredients = ingredients;
          // })

          // console.log('Recipe', recipe.products)
        } else {

          console.error('Recipe not found');
        }
      });
    });
  }

  // getIngredientNames(products: any[]): string[] {
  //   return products.map(product => product.ingredients?.name)
  // }

  // patchProductsArray(products: any[]): void {
  //   const productsFormArray = this.editProductForm.get('products') as FormArray;
  //   productsFormArray.clear(); // Clear existing products
  //   products.forEach(product => {
  //     productsFormArray.push(this.formBuilder.control(product));
  //   });
  // }

  updateRecipe(): void {
    if (this.recipe && this.recipe.id) {
      this.recipeService.updateRecipeById(this.recipe.id, this.editProductForm.value)
      .subscribe({
          next: (updatedRecipe) => {
            console.log("Recipe updated successfully:", updatedRecipe);
        }, 
        error: (error) =>{
          console.error("Error updating recipe:", error)
        }
      })
      
    }
  }

  cancelUpdate(): void {
    this.router.navigate([''])
  }
}
