import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LocationDropdownComponent } from '../dropdown/dropdown.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'Navigation',
  standalone: true,
  imports: [CommonModule, LocationDropdownComponent], 
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../app.component.css']
})
export class Navigation {
  selectedLocation: string;

  constructor(private locationService: LocationService) {
    this.selectedLocation = this.locationService.getSelectedLocation();
  }

  onLocationSelected(selectedLocation: string) {
    this.selectedLocation = selectedLocation;
    this.locationService.setSelectedLocation(selectedLocation);
  }
  
}
