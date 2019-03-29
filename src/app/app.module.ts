import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpeciesComponent } from './species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PageNotFoundComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
