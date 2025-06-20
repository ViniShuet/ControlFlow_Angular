import { CategoriaComponent } from './components/categoria/categoria.component';
import { Categoria } from './interfaces/categoria';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import {Carros} from './interfaces/carros'
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './app/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InterpolacaoComponent,
    ControlFlowComponent,
    PropertieBindingComponent,
    DiretivaComponent,
    ClienteComponent,
    HomeComponent,
    NavComponent,
    NotfoundComponent,
    CategoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  carros: Carros[] = [
    {id:1, nome:"Corsa", marca:"GM", ano:1996, cor:"Verde"},
    {id:2, nome:"Celta", marca:"GM", ano:2000, cor:"Amarelo"},
    {id:3, nome:"Onix", marca:"GM", ano:2001, cor:"Preto"},
  ]
}
