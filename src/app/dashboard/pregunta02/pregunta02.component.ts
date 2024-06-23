import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta02',
  standalone: true,
  imports: [FormsModule, MaterialModule, CommonModule],
  templateUrl: './pregunta02.component.html',
  styleUrl: './pregunta02.component.css'
})
export class Pregunta02Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  totalPagar: number = 0;
  mensajeDescuento: string = '';

  calcularTotalPagar() {
    if (this.cantidad > 20) {
      this.totalPagar = this.precioUnitario * this.cantidad * 0.9; // Aplica 10% de descuento
      this.mensajeDescuento = 'Se aplica un descuento del 10%';
    } else if (this.cantidad > 10) {
      this.totalPagar = this.precioUnitario * this.cantidad * 0.95; // Aplica 5% de descuento
      this.mensajeDescuento = 'Se aplica un descuento del 5%';
    } else {
      this.totalPagar = this.precioUnitario * this.cantidad; // Sin descuento
      this.mensajeDescuento = 'No se aplica descuento';
    }
  }
}