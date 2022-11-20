import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { RouteLinks } from './shared/helper/enum';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: RouteLinks.Home,
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
