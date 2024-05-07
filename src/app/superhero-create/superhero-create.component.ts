import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperheroService } from '../superhero.service';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-superhero-create',
  templateUrl: './superhero-create.component.html',
  styleUrls: ['./superhero-create.component.css']
})
export class SuperheroCreateComponent implements OnInit {
  superheroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private superheroService: SuperheroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.superheroForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      ability: ['', Validators.required],
      strength: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.superheroForm.valid) {
      const superhero: Superhero = {
        name: this.superheroForm.value.name,
        ability: this.superheroForm.value.ability,
        strength: this.superheroForm.value.strength,
        id: this.superheroForm.value.id
      };
      this.superheroService.addSuperhero(superhero);
      this.router.navigate(['/superheroes']);
    }
  }
}
