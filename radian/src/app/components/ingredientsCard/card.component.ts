import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../models/ingredients.model';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class IngredientsComponent {

  @Input() item!: Ingredients; // Remove the default value

  selectedLocation!: keyof Ingredients; // Explicitly declare the type

  constructor(private router: Router, private locationService: LocationService) { 
    this.selectedLocation = this.locationService.getSelectedLocation() as keyof Ingredients; // Cast as keyof Ingredients
  }

  navigateToEditIngredient(id: number) {
    this.router.navigate(['/edit-ingredient', id]);
  }
}
