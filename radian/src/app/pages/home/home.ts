import { Component } from '@angular/core';

import { AdminCard } from '../../components/adminCard/card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    AdminCard,
    //import components
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../app.component.css']
})
export class HomePage {

}