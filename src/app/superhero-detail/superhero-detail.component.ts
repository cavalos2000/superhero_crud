import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css']
})
export class SuperheroDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
