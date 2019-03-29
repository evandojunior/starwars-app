import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent }  from './people/people.component'
import { StarshipsComponent }  from './starships/starships.component'
import { PlanetsComponent }  from './planets/planets.component'
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'people', component: PeopleComponent, data: { title: 'People List' }},
  { path: 'starships', component: StarshipsComponent, data: { title: 'Starships List' }},
  { path: 'planets', component: PlanetsComponent, data: { title: 'Planets List' }},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
