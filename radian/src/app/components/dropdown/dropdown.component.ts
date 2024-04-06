import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-dropdown',
  standalone: true,
  imports: [
    MatSelectModule, CommonModule, FormsModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class LocationDropdownComponent {

  @Output() locationSelected = new EventEmitter<string>();
  selectedLocation: string;
  locations: string[] = ['durban', 'pretoria', 'capeTown'];

  constructor(private locationService: LocationService) {
    this.selectedLocation = this.locationService.getSelectedLocation();
  }

  onSelectionChange(selectedLocation: string) {
    this.locationService.setSelectedLocation(selectedLocation);
    this.locationSelected.emit(selectedLocation);
  }
  
}
