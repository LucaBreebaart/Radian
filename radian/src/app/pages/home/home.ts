import { Component } from '@angular/core';

import { productCard } from '../../components/productCard/productCard.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    productCard, 
    //import components
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../app.component.css']
})
export class HomePage {

}