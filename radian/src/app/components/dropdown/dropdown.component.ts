import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
export class LocationDropdownComponent  {

  //-----------------------Added for Testing--------------------------------------------//
  
  // selectedLocation: string;
  // locations: string[] = ['Durban', 'Pretoria', 'Cape Town'];

  // constructor(private locationService: LocationService) {
  //   this.selectedLocation = this.locationService.getSelectedLocation() || '';
  // }

  // ngOnInit() {
  //   this.selectedLocation = this.locationService.getSelectedLocation();
  //   this.locationService.locationChanged.subscribe((location: string) => {
  //     this.selectedLocation = location
  //   })
  // }

  // onSelectionChange(selectedLocation: string) {
  //   this.locationService.setSelectedLocation(selectedLocation)
  //   console.log(selectedLocation)
  // }

  // ---------------------------------------------------------------------------------- //
  @Output() locationSelected = new EventEmitter<string>();
  selectedLocation: string;
  locations: string[] = ['durban', 'pretoria', 'capeTown'];

  constructor(private locationService: LocationService) {
    this.selectedLocation = this.locationService.getSelectedLocation();
  }

  onSelectionChange(selectedLocation: string) {
    this.locationService.setSelectedLocation(selectedLocation);
    this.locationSelected.emit(selectedLocation);
    console.log('Location', selectedLocation)
  }
  
}
