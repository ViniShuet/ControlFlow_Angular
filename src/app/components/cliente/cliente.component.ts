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

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  save(){
    if(this.clienteForm.valid){
      const formData = this.clienteForm.value

      const clienteAdd : Cliente = {
        id: this.generateRandomString(6),
        nome: formData.nome,
        telefone: formData.telefone
      }
      //console.log(clienteAdd)
      this.clienteService.add(clienteAdd) //chamando a service para inserir
      alert('Inserido com sucesso') //enviando feedback
      this.clienteForm.reset() //limpar o form
      this.list() //recarregar a lista abaixo com o item inserido
    }else{
      alert('Favor preencher os campos obrigatorios')
    }
  }

}
