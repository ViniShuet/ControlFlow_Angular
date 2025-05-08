import { CategoriaService } from './../../services/categoria.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../../interfaces/categoria';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categoriaForm : FormGroup = new FormGroup({})
  categorias : Categoria[] = [];

  constructor(private CategoriaService:CategoriaService, private formBuilder:FormBuilder,){
    this.categoriaForm = formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['']
    })
  }

  list(): void {
    this.CategoriaService.list().subscribe((resposta) => (this.categorias = resposta));
  }

}
