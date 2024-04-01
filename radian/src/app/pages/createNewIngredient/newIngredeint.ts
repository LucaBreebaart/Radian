import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredients } from '../../models/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';

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

  constructor(private service: IngredientsService) { }

  IngredientList: Ingredients[] = [

  ];

  ngOnInit() {
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.IngredientList = data
    })
  }

  // Form variables
  // think of this as your useStates
  newIngredientItem = new FormGroup({
    name: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    description: new FormControl(""),
    stock: new FormControl(0, Validators.required)
  })

  addNewIngredient() {
    console.warn(this.newIngredientItem.value);

    // Create a new ingredient object from form values
    // Update newIngredientData to include sku and icon
    const newIngredientData = {
      name: this.newIngredientItem.value.name!,
      category: this.newIngredientItem.value.category!,
      description: this.newIngredientItem.value.description!,
      stock: this.newIngredientItem.value.stock!,
      sku: "exampleSKU", // Add a placeholder value for sku
      icon: "exampleIcon.png" // Add a placeholder value for icon
    };

    // Call the service method to add the new ingredient
    this.service.addIngredient(newIngredientData).subscribe(
      (response: any) => {
        console.log('New ingredient added successfully:', response);
        // Optionally, you can update the local IngredientList with the new data if needed
        // this.IngredientList.push(response);
        // Reset the form after successful submission
        this.newIngredientItem.reset();
      },
      (error) => {
        console.error('Error adding new ingredient:', error);
        // Handle error here, such as showing an error message to the user
      }
    );
  }
}
