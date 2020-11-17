import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesDashboardComponent } from './features/heroes/components/heroes-dashboard/heroes-dashboard.component';
import { HeroSearchComponent } from './features/heroes/components/hero-search/hero-search.component';
import { HeroesListComponent } from './features/heroes/components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './features/heroes/components/hero-detail/hero-detail.component';
import { MessagesComponent } from './features/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    AppComponent,
    HeroesDashboardComponent,
    HeroSearchComponent,
    HeroesListComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  providers: [
    // no need to place any providers due to the 'providedIn' flag...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
