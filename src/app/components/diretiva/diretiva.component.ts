import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
  isActive = true;
  hasError = true;
  classes = ["text-sucess", "text-danger", "special"]
  isSpecial = true;
}
