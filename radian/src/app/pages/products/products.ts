import { Component } from '@angular/core';

import { productsCard } from '../../components/ProductsCard/card.component'; 

@Component({
  selector: 'ProductsPage',
  standalone: true,
  imports: [

    productsCard,
    //import components
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css', '../../app.component.css']
})
export class ProductsPage {

}