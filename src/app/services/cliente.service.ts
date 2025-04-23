import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //criar lista fake
  clientes: Cliente[ ] = [
    {id:"qualquer coisa", nome:"Vinicius", telefone:"9"},
    {id:"coisa qualquer", nome:"Isa"}
  ]
  constructor() { }

  //retorna lista clientes
  list(): Cliente[]{
    return this.clientes;
  }

  //metodo para remover um cliente
  remove(id:string){
    const cliente = this.clientes.find(c => c.id == id) //buscar cliente dentro da lista

    if(cliente){ //Se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index,1)
    }
  }

  //metodo adicionar um cliente
  add(cliente:Cliente){
    //O push adiciona um item dentro de uma array
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  //metodo atualizar
  update(id:string, cliente:Cliente){
    const index = this.clientes.findIndex(c => c.id == id)

    if(index !== -1){
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}
