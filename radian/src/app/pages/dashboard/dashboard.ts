import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../../models/warehouse.model';
import { IngredientsService } from '../../services/ingredients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredientsService.getAllWarehousesWithIngredients().subscribe(warehouses => {
      this.warehouses = warehouses;
    });
  }
}
