import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-newProduct',
  standalone: true,
  imports: [

    // NewProductPage,
    //import components
  ],
  templateUrl: './newProduct.html',
  styleUrls: ['./newProduct.css', '../../app.component.css']
})
export class NewProductPage implements OnInit{

  recipeForm: FormGroup;
  productsForm: FormGroup;
  ingredientsForm: FormGroup

  constructor(

    private formBuilder: FormBuilder,
    private recipeService: RecipeService

  ) {

    this.recipeForm = this.formBuilder.group({

      name: ['', Validators.required],
      img: [''],
      price: [0, Validators.required],
      description: ['', Validators.required],
      amountCrafted: [0, Validators.required]

    })

    this.productsForm = this.formBuilder.group({

      productId: [0, Validators.required],
      ingredientId: [0, Validators.required],
      recipeId: [0, Validators.required],
      amount: [0, Validators.required]

    })

    this.ingredientsForm = this.formBuilder.group({

      ingredientName: ['', Validators.required]

    })

  }

  ngOnInit(): void {

  }
}