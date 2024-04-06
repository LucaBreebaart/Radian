import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navigation } from '../../components/navigation/nav.component';
import { CommonModule } from '@angular/common';
import { Ingredients } from '../../models/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Navigation, CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css', '../../app.component.css']
})
export class DashboardPage implements OnInit {
  ingredientsData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchIngredientsData('durban');
    this.fetchIngredientsData('pretoria');
    this.fetchIngredientsData('capeTown');
  }

  fetchIngredientsData(location: string) {
    this.http.get(`http://localhost:3000/ingredients/${location}`)
      .subscribe((data: any) => {
        this.ingredientsData[location] = data;
      });
  }
}