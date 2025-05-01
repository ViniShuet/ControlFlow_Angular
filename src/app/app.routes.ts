import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './app/home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'cliente', component:ClienteComponent},
    {path: 'control-flow', component:ControlFlowComponent}
];
