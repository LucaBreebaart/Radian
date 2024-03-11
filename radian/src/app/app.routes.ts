import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/404';


// Pages
import { HomePage } from './pages/home/home';
import { NewProductPage } from './pages/createNewProduct/newProduct';
import { InventoryPage } from './pages/Inverntory/inventory';


export const routes: Routes = [

  { path : '', component: InventoryPage},
  { path : 'newProduct', component: NewProductPage},
  { path : 'home', component: HomePage},
  {path: '', redirectTo: 'inventory', pathMatch:'full' },
  {path: "**", component: PageNotFoundComponent}

];
