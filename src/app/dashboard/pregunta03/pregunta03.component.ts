import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta03',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta03.component.html',
  styleUrl: './pregunta03.component.css'
})
export class Pregunta03Component {
  precioMenosDe5: number = 800;
  precio5OMas: number = 700;
  cantidad: number = 0;
  totalPagar: number = 0;

  calcularTotalPagar() {
    if (this.cantidad < 5) {
      this.totalPagar = this.precioMenosDe5 * this.cantidad;
    } else {
      this.totalPagar = this.precio5OMas * this.cantidad;
    }
  }
}

