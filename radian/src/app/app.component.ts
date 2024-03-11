import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/404';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Pages

import { HomePage } from './pages/home/home';


// Components

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  PageNotFoundComponent,
  RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, //import any components
  HomePage, //import pages
   //import components
], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}

