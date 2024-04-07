import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../models/ingredients.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-edit-ingredient',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './editIngredient.html',
  styleUrls: ['./editIngredient.css', '../../app.component.css']
})
export class EditIngredientComponent implements OnInit {
  ingredient: Ingredients | undefined;
  editIngredientForm: FormGroup;
  selectedLocation!: keyof Ingredients;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientsService,
    private formBuilder: FormBuilder,
    private locationService: LocationService,
  ) {
    // Determine the selected location
    this.selectedLocation = this.locationService.getSelectedLocation() as keyof Ingredients;

    // Initialize the form with default values
    this.editIngredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      sku: ['', Validators.required],
      category: ['', Validators.required],
      icon: [''],
      description: [''],
      [this.selectedLocation]: [0, Validators.required]
    });
    console.log(this.selectedLocation)
    console.log(this.editIngredientForm)
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.ingredientService.getIngredient(id).subscribe(ingredient => {
        this.ingredient = ingredient;
        this.populateForm();
      });
    });
  }

  populateForm(): void {
    if (!this.selectedLocation || !this.ingredient) {
      return;
    }

    // Use the selected location to populate the stock
    this.editIngredientForm.patchValue({
      name: this.ingredient.name,
      sku: this.ingredient.sku,
      category: this.ingredient.category,
      icon: this.ingredient.icon,
      description: this.ingredient.description,
      [this.selectedLocation]: this.ingredient[this.selectedLocation]
    });
  }

  updateIngredient(): void {
    if (this.editIngredientForm.valid && this.ingredient) {
      const updatedIngredient = { ...this.editIngredientForm.value, id: this.ingredient.id };
      this.ingredientService.updateIngredient(updatedIngredient).subscribe(
        () => {
          this.router.navigate(['/ingredients']);
        },
        error => {
          console.error("Error updating ingredient:", error);
        }
      );
    }
  }


  cancelEdit(): void {
    this.router.navigate(['/ingredients']);
  }
}
