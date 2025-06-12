import { Component } from "@angular/core";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})

export class ProductoComponent {

  public nombre: string;
  public marca: string;
  public precio: number;

  constructor(){
    this.nombre = "PC Portátil";
    this.marca = "Asus";
    this.precio = 1200;

    console.log("ProductoComponent initialized");
  }
}
