import { Component } from '@angular/core';
import { Navigation } from '../../components/navigation/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navigation
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../app.component.css']
})
export class HomePage {

}