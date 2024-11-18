import { Component, OnInit } from '@angular/core';
import { IngredientsComponent } from '../../components/ingredientsCard/card.component';
import { CommonModule } from '@angular/common';
import { Ingredients } from '../../models/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';
import { LocationDropdownComponent } from '../../components/dropdown/dropdown.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'IngredientsPage',
  standalone: true,
  imports: [
    IngredientsComponent, CommonModule, LocationDropdownComponent
  ],
  templateUrl: './ingredients.html',
  styleUrls: ['./ingredients.css', '../../app.component.css']
})
export class IngredientsPage implements OnInit {
  inventoryList: Ingredients[] = [];
  selectedLocation: string = ''; // Initialize with an empty string

  constructor(
    private service: IngredientsService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.selectedLocation = this.locationService.getSelectedLocation() || ''; // Provide a fallback empty string
    this.loadInventory();
  }

  loadInventory() {
    this.service.getAllInventory(this.selectedLocation).subscribe((data) => {
      console.log(data);
      this.inventoryList = data;
    });
  }

  onLocationSelected(location: string) {
    this.selectedLocation = location;
    this.loadInventory();
  }
}