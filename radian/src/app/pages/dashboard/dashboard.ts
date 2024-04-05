import { Component } from '@angular/core';
import { Navigation } from '../../components/navigation/nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Navigation
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css', '../../app.component.css']
})
export class dashboardPage {

}