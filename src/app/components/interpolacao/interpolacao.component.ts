import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolacao.component.html',
  styleUrl: './interpolacao.component.css'
})
export class InterpolacaoComponent {
  name:string = 'Vinicius';
  age:number = 20;
  job = 'Developer';
  hobbies = ['Music', 'Sports', 'Games'];
  car = {make: 'Ford', model:'Fiesta'};
  img = '../../../assets/angular.jpg'
}
