import { Component } from '@angular/core';

import { productsCard } from '../../components/ProductsCard/card.component'; 

@Component({
  selector: 'ProductsPage',
  standalone: true,
  imports: [

    productsCard,
    //import components
  ],
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.css', '../../app.component.css']
})
export class ProductsPage {

}