import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../models/ingredients.model';

@Component({
  selector: 'app-edit-ingredient',
  standalone: true,
  imports: [
    ReactiveFormsModule
    // NewProductPage,
    //import components
  ],
  templateUrl: './editIngredient.html',
  styleUrls: ['./editIngredient.css', '../../app.component.css']
})
export class EditIngredientComponent implements OnInit {
  ingredient: Ingredients | undefined;
  editIngredientForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientsService,
    private formBuilder: FormBuilder
  ) {
    this.editIngredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      sku: ['', Validators.required],
      category: ['', Validators.required],
      icon: [''],
      description: [''],
      stock: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.ingredientService.getIngredient(id).subscribe(ingredient => {
        this.ingredient = ingredient;
        // Populate form fields with existing data
        this.editIngredientForm.patchValue({
          name: ingredient.name,
          sku: ingredient.sku,
          category: ingredient.category,
          icon: ingredient.icon,
          description: ingredient.description,
          stock: ingredient.stock
        });
      });
    });
  }

  updateIngredient(): void {
    if (this.editIngredientForm.valid) {
      const updatedIngredient = { ...this.editIngredientForm.value, id: this.ingredient?.id };
      this.ingredientService.updateIngredient(updatedIngredient).subscribe(
        () => {
          // Handle success
        },
        error => {
          // Handle error
        }
      );
    }
  }
}
