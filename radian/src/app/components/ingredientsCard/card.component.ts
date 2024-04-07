import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../models/ingredients.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class IngredientsComponent {

  // constructor(private service: IngredientsService) {}

  constructor(private router: Router) { }

  navigateToEditIngredient(id: number) {
    this.router.navigate(['/edit-ingredient', id]);
  }

  @Input() item: Ingredients = {
    id: 0,
    name: "Dummy",
    sku: "Dummy",
    category: "Dummy",
    icon: "assets/python.png",
    description: "Dummy",
    durban: 0,
    pretoria: 0,
    capeTown: 0
  }
}
