import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouteLinks } from './shared/helper/enum';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'booking-details',
    component: BookingDetailsComponent,
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
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, ReactiveFormsModule],
  providers: [],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
