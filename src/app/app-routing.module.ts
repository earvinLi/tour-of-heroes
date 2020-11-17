import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesDashboardComponent } from './features/heroes/components/heroes-dashboard/heroes-dashboard.component';
import { HeroesListComponent } from './features/heroes/components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './features/heroes/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroesDashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
