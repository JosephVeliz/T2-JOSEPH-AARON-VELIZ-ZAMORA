import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta04',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta04.component.html',
  styleUrl: './pregunta04.component.css'
})
export class Pregunta04Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  totalPagar: number = 0;
  mensajeDescuento: string = '';

  calcularTotalPagar() {
    this.totalPagar = this.precioUnitario * this.cantidad;

    if (this.totalPagar > 200) {
      this.totalPagar *= 0.8; 
      this.mensajeDescuento = 'Se aplica un descuento del 20%';
    } else {
      this.mensajeDescuento = 'No se aplica descuento';
    }
  }
}