import { Injectable } from '@angular/core';
import { Superhero } from './superhero.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private superheroes: Superhero[] = [
    { id: 1, name: 'Superman', ability: 'Flight', strength: 100 },
    { id: 2, name: 'Batman', ability: 'Intelligence', strength: 90 },
    { id: 3, name: 'Wonder Woman', ability: 'Lasso of Truth', strength: 95 }
  ];

  constructor() { }

  getAllSuperheroes(): Superhero[] {
    return this.superheroes;
  }

  getSuperheroById(id: number): Superhero | undefined {
    return this.superheroes.find(hero => hero.id === id);
  }

  addSuperhero(superhero: Superhero): void {
    this.superheroes.push(superhero);
  }

  updateSuperhero(superhero: Superhero): void {
    const index = this.superheroes.findIndex(h => h.id === superhero.id);
    if (index !== -1) {
      this.superheroes[index] = superhero;
    }
  }

  deleteSuperhero(id: number): void {
    this.superheroes = this.superheroes.filter(hero => hero.id !== id);
  }
}
