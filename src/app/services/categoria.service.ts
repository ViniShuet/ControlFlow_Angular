import { Categoria } from '../interfaces/categoria';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:3000/categoria'; //URL da API


  categoria: Categoria[ ] = []

  //Injsecao de dependencia de http
  constructor(private http:HttpClient) { }

  list(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiUrl) as Observable<Categoria[]>;
  }

}
