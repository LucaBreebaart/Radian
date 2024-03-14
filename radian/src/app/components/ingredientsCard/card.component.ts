import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'IngredientsCard',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../app.component.css']
})
export class IngredientsCard {

  @Input() items: any[] = [];


}
