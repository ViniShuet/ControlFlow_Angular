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
  clientes : Cliente[] = [];
  clienteIdEdicao:string | null = null;

  constructor(private clienteService:ClienteService, private formBuilder:FormBuilder,){
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    })
  }


  list(): void {
    this.clienteService.list().subscribe((resposta) => (this.clientes = resposta));
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
      const formData = this.clienteForm.value;

      if(this.clienteIdEdicao){
        const clienteUpdate:Cliente = {
          id:this.clienteIdEdicao,
          nome: formData.nome,
          telefone: formData.telefone
        }

        this.clienteService.update(this.clienteIdEdicao, clienteUpdate)
        this.clienteIdEdicao = null
        alert('Alterado com sucesso')
      }else{
        const clienteAdd : Cliente = {
          id: this.generateRandomString(6),
          nome: formData.nome,
          telefone: formData.telefone
        }
        //console.log(clienteAdd)
        this.clienteService.add(clienteAdd).subscribe() //chamando a service para inserir
        alert('Inserido com sucesso') //enviando feedback
        this.list() //recarregar a lista abaixo com o item inserido
      }
    }



    this.clienteForm.reset() //limpar o form
  }

  editar(id:String):void{
    //buscando todos os clientes e filtrando
    //pelo id enviado como parametro
    console.log(this.clienteService.list)

    // const cliente = this.clienteService.list().find(c => c.id == id)
    // if(cliente){
    //   this.clienteIdEdicao = cliente.id

    //   //atribuir os valores ao formulario
    //   this.clienteForm.patchValue(
    //     {
    //       nome: cliente.nome,
    //       telefone: cliente.telefone
    //     }
    //   )
    // }
  }

  remover(id:string):void{
    this.clienteService.remove(id)
  }

}
