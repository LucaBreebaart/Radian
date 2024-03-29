import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../models/ingredients.model';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class IngredientsComponent {

  constructor(private service: IngredientsService) {}

  @Input() item: Ingredients = {
    id: 0,
    name: "Dummy",
    category: "Dummy",
    icon: "assets/python.png",
    description: "Dummy",
    stock: 0
  }
}
