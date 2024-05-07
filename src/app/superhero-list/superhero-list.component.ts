import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Superhero } from '../superhero.model';
import { SuperheroService } from '../superhero.service';
import { SuperheroDetailComponent } from '../superhero-detail/superhero-detail.component';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {
  superheroes: Superhero[] = [];
  pagedSuperheroes: any[] = [];
  pageSize: number = 10;
  pageIndex: number = 0;
  totalItems!: number;

  constructor(private superheroService: SuperheroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.superheroes = this.superheroService.getAllSuperheroes();
    this.totalItems = this.superheroes.length;
  }

  updatePage(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedSuperheroes = this.superheroes.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: { pageIndex: number; pageSize: number; }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePage();
  }

  deleteSuperhero(id: number): void {
    this.superheroService.deleteSuperhero(id);
    this.superheroes = this.superheroService.getAllSuperheroes();
  }

  viewHeroDetail(superhero: any): void {
    this.dialog.open(SuperheroDetailComponent, {
      width: '400px',
      data: superhero
    });
  }
}
