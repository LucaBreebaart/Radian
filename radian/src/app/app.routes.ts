import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/404';

// Pages
import { HomePage } from './pages/home/home';
import { NewProductPage } from './pages/createNewProduct/newProduct';
import { ProductsPage } from './pages/products/products';
import { IngredientsPage } from './pages/ingredients/ingredients';
import { LoginComponent } from './components/login/login.component';
import { AdminAuthGuard, AuthGuard } from './guards/auth.guard';
import { NewIngredientPage } from './pages/createNewIngredient/newIngredeint';

import { EditIngredientComponent } from './pages/editINgredient/editIngredient';
import { EditProductsComponent } from './pages/edit-products/edit-products.component';

export const routes: Routes = [

  { path: '', component: ProductsPage },
  { path: 'newProduct', component: NewProductPage },
  { path: 'ingredients', component: IngredientsPage },
  { path: 'newIngredient', component: NewIngredientPage },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'edit-ingredient/:id', component: EditIngredientComponent }, 
  { path: 'editproduct/:id', component: EditProductsComponent},

  { path: '', redirectTo: 'inventory', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }