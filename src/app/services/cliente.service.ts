import { Cliente } from './../interfaces/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //URL da API


  clientes: Cliente[ ] = []

  //Injsecao de dependencia de http
  constructor(private http:HttpClient) { }

  list(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>;
  }

  // //retorna lista clientes
  // list(): Cliente[]{
  //   return this.clientes.get<Cliente[]>(this.apiUrl) as Observable(Cliente);
  // }

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

  add(cliente: Cliente) {
    const httpHeaders =
    {
      headers: {
        'Content-type': 'application/json',
      },
    };

    return this.http.post(this.apiUrl, cliente, httpHeaders);
  }


  //metodo adicionar um cliente
  // add(cliente:Cliente){
  //   //O push adiciona um item dentro de uma array
  //   this.clientes.push(cliente)
  //   console.log(this.clientes)
  // }

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
