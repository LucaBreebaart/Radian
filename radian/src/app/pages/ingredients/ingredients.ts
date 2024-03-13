import { Component } from '@angular/core';

import { IngredientsCard } from '../../components/ingredientsCard/card.component';


@Component({
  selector: 'IngredientsPage',
  standalone: true,
  imports: [

    IngredientsCard,
    //import components
  ],
  templateUrl: './ingredients.html',
  styleUrls: ['./ingredients.css', '../../app.component.css']
})
export class IngredientsPage {

}