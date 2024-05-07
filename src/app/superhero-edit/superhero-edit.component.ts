import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperheroService } from '../superhero.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-superhero-edit',
  templateUrl: './superhero-edit.component.html',
  styleUrls: ['./superhero-edit.component.css']
})
export class SuperheroEditComponent implements OnInit {
  superheroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SuperheroEditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private superheroService: SuperheroService) { }

  ngOnInit(): void {
    this.superheroForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      name: [this.data.name, Validators.required],
      ability: [this.data.ability, Validators.required],
      strength: [this.data.strength, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.superheroForm.valid) {
      this.superheroService.editSuperhero(this.superheroForm.value);
      this.dialogRef.close()
    }
  }
}
