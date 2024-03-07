import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';

// Pages
import { HomePage } from './pages/home/home';


export const routes: Routes = [

  { path: 'test', component: TestComponent },
  { path : '', component: HomePage},
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: "**", component: PageNotFoundComponent}

];
