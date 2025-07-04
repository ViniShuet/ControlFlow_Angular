import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './app/home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'cliente', component:ClienteComponent},
    {path: 'categoria', component:CategoriaComponent},
    {path: 'control-flow', component:ControlFlowComponent},
    {path: 'produto/:id', component:ProdutoDetalheComponent},
    {path: '**', component:NotfoundComponent} //sempre precisa ser o ultimo
];
