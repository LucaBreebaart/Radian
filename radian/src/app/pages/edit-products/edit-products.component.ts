import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css', '../../app.component.css']
})
export class EditProductsComponent implements OnInit {

  products: Recipe | undefined

  editProductForm: FormGroup

  constructor(
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
      
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.recipeService.getRecipeById(id).subscribe(recipe => {
        if (recipe) {
          this.products = recipe;
  
          this.editProductForm.patchValue({
            name: recipe.name,
            img: recipe.img,
            price: recipe.price,
            description: recipe.description,
            amountCrafted: recipe.amountCrafted
          });
          console.log('Recipe', recipe)
        } else {

          console.error('Recipe not found');
        }
      });
    });
  }
  // ngOnInit(): void {
  //   this.route.params.subscribe(params =>{
  //     const id = +params['id']
  //     this.recipeService.getAllRecipes().subscribe((recipe: Recipe) =>{
  //       this.products = recipe

  //       this.editProductForm.patchValue({
  //         name: recipe.name,
  //         img: recipe.img,
  //         price: recipe.price,
  //         description: recipe.description,
  //         amountCrafted: recipe.amountCrafted
  //       })
  //     })
  //   })
  // }
}
