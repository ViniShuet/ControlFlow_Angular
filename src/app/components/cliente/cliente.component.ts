import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm : FormGroup = new FormGroup({})
  clientes : Cliente[] = []

  constructor(private clienteService:ClienteService, private formBuilder:FormBuilder,){
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    })
  }

  list():void{
    this.clientes = this.clienteService.list()
  }

  //metedo executado ao inicializar a pagina
  ngOnInit():void{
    this.list()
  }

  save(){
    if(this.clienteForm.valid){
      alert('Podemos salvar!')
    }
  }

}
