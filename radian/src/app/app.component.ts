import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/404';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Pages

import { HomePage } from './pages/home/home';
import { Navigation } from './components/navigation/nav.component';
import { IngredientsPage } from './pages/ingredients/ingredients';
import { NewProductPage } from './pages/createNewProduct/newProduct';
import { ProductsPage } from './pages/products/inventory';

// Components


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  PageNotFoundComponent,
  RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, //import any components
  HomePage, IngredientsPage, NewProductPage,ProductsPage,  //import pages
  Navigation, //import components
], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}

