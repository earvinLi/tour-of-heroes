import { NgModule } from '@angular/core';

import { HeroesDashboardComponent } from './components/heroes-dashboard/heroes-dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroesDashboardComponent,
    HeroSearchComponent,
    HeroesListComponent,
    HeroDetailComponent,
  ],
})
export class HeroesModule {}
