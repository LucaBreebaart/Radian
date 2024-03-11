import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'Navigation',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../app.component.css']
})
export class Navigation {
}
