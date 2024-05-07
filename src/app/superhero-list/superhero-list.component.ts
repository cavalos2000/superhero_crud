import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero.model';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {
  superheroes: Superhero[] = [];

  constructor(private superheroService: SuperheroService) { }

  ngOnInit(): void {
    this.superheroes = this.superheroService.getAllSuperheroes();
  }

  deleteSuperhero(id: number): void {
    this.superheroService.deleteSuperhero(id);
    this.superheroes = this.superheroService.getAllSuperheroes();
  }
}
