import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredients } from '../../models/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-newIngredeint',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
    // NewProductPage,
    //import components
  ],
  templateUrl: './newIngredeint.html',
  styleUrls: ['./newIngredeint.css', '../../app.component.css']
})
export class NewIngredientPage {

  constructor(
    private service: IngredientsService,
    private locationService: LocationService,

  ) {
    this.selectedLocation = this.locationService.getSelectedLocation() as keyof Ingredients;
  }

  IngredientList: Ingredients[] = [];

  selectedLocation!: keyof Ingredients;

  // Form variables
  // think of this as your useStates
  newIngredientItem = new FormGroup({
    name: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    description: new FormControl(""),
    icon: new FormControl(""),
    stock: new FormControl(0, Validators.required)
  })
  addNewIngredient() {
    console.warn(this.newIngredientItem.value);
    console.log(this.selectedLocation)
    // SKU
    // Extract name, category, and ID
    const name: string = this.newIngredientItem.value.name!;
    const category: string = this.newIngredientItem.value.category!;
    const id: string = this.IngredientList.length.toString().padStart(2, '0');

    // Create SKU from the first, middle, and last characters of the name
    let sku = '';
    if (name.length >= 3) {
      const firstChar = name.charAt(0);
      const middleChar = name.charAt(Math.floor(name.length / 2));
      const lastChar = name.charAt(name.length - 1);
      sku = firstChar.toUpperCase() + middleChar.toUpperCase() + lastChar.toUpperCase() + id;
    } else {
      // If name has less than 3 characters
      sku = name.substring(0, 3).toUpperCase() + id;
    }
    // SKU

    // Create a new ingredient object from form values
    const newIngredientData = {
      name: name,
      category: category,
      description: this.newIngredientItem.value.description!,
      currentLocation: this.selectedLocation, 
      stock: this.newIngredientItem.value.stock!, 
      icon: this.newIngredientItem.value.icon!,
      sku: sku
    };
    console.log(newIngredientData)

    
    this.service.addIngredient(newIngredientData).subscribe(
      (response: any) => {
        console.log('New ingredient added successfully:', response);

        this.newIngredientItem.reset();
      },
      (error) => {
        console.error('Error adding new ingredient:', error);

      }
    );
  }
}
