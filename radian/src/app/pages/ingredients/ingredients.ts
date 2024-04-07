import { Component } from '@angular/core';
import { IngredientsComponent } from '../../components/ingredientsCard/card.component';
import { CommonModule } from '@angular/common';
import { Ingredients } from '../../models/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'IngredientsPage',
  standalone: true,
  imports: [
    IngredientsComponent, CommonModule
  ],
  templateUrl: './ingredients.html',
  styleUrls: ['./ingredients.css', '../../app.component.css']
})
export class IngredientsPage {

  constructor(private service: IngredientsService) { }

  // an example of an array, but specifying that the objects should follow the inventory model
  // the inventory model - dummy data
  inventoryList: Ingredients[] = [
    // {
    //   id: 1,
    //   name: "HTML",
    //   sku: "html",
    //   category: "markup",
    //   icon: "",
    //   description: "Building blocks of the web",
    //   stock: 4
    // },
    // {
    //   id: 3,
    //   name: "CSS",
    //   sku: "css1",
    //   category: "styling",
    //   icon: "",
    //   description: "Makes the web pretty",
    //   stock: 10
    // },
    // {
    //   id: 3,
    //   name: "JavaScript",
    //   sku: "js01",
    //   category: "programming",
    //   icon: "",
    //   description: "Makes the web smart",
    //   stock: 13
    // }
  ];
  ngOnInit() {
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventoryList = data
    })
  }
}