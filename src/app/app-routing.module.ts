import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroCreateComponent } from './superhero-create/superhero-create.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: 'superheroes', component: SuperheroListComponent },
  { path: 'create', component: SuperheroCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
