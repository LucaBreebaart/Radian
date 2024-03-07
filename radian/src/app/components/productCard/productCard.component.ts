import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css', '../../app.component.css']
})
export class productCard {
  @Input() items: any[] = [];
}
