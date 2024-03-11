import { Component } from '@angular/core';

import { AdminCard } from '../../components/adminCard/card.component';


@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [

    AdminCard,
    //import components
  ],
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.css', '../../app.component.css']
})
export class InventoryPage {

}