import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroCreateComponent } from './superhero-create/superhero-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroDetailComponent } from './superhero-detail/superhero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroListComponent,
    SuperheroCreateComponent,
    SuperheroDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
