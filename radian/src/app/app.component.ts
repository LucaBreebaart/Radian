import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/404';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Pages

import { HomePage } from './pages/home/home';
import { Navigation } from './components/navigation/nav.component';
import { IngredientsPage } from './pages/ingredients/ingredients';
import { NewProductPage } from './pages/createNewProduct/newProduct';
import { ProductsPage } from './pages/products/products';
import { NewIngredientPage } from './pages/createNewIngredient/newIngredeint';

// Components

import { LoginComponent } from './components/login/login.component';

//Other

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  PageNotFoundComponent,
  RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, //import any components
  HomePage, IngredientsPage, NewProductPage, ProductsPage, NewIngredientPage,  //import pages
  Navigation, LoginComponent//import components
], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Class-Inventory';

  constructor(private service: AuthService, private router: Router) { }

  public isLoggedIn = true

  public isAdmin = true

  ngOnInit() {
    this.checkLoginState()
    this.isAdmin = this.service.isUserAdmin()
  }

  checkLoginState() {
    this.service.checkIfLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn

      this.isAdmin = this.service.isUserAdmin()
    })
  }

  callLogout() {
    this.service.logout()
    this.router.navigateByUrl("/login")
  }
}

