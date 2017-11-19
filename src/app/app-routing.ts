import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_modules/home/items/cn_home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

];

export const AppRouting = RouterModule.forRoot(routes);