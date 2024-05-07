import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Superhero } from '../superhero.model';
import { SuperheroService } from '../superhero.service';
import { SuperheroDetailComponent } from '../superhero-detail/superhero-detail.component';
import { SuperheroEditComponent } from '../superhero-edit/superhero-edit.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  filterForm: FormGroup = new FormGroup({});
  searchText: any;
  

  constructor(private superheroService: SuperheroService,
     private formBuilder: FormBuilder,
     private router: Router,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    });
    this.superheroes = this.superheroService.getAllSuperheroes();
    this.pagedSuperheroes = this.superheroes;
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
  editSuperhero(superhero: any): void {
    const dialogRef = this.dialog.open(SuperheroEditComponent, {
      width: '500px',
      data: { ...superhero } // Pass the superhero data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event
      console.log('The dialog was closed');
    });
  }
  filterSuperheroes(): void {
    const searchText = this.filterForm.get('filter');
    if (searchText?.value !== '') {
      console.log("filter")
      this.pagedSuperheroes = this.pagedSuperheroes.filter(superhero =>
        superhero.name.includes(searchText?.value)
      );
    }
    else {
      console.log("update")
      this.updatePage();
    }
  }
  createSuperhero() {
    this.router.navigate(['/create']);
  }

}
