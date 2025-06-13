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
  public descripcion: string;

  constructor(){
    this.nombre = "PC Portátil";
    this.marca = "Asus";
    this.precio = 1200;
    this.descripcion = "Este portatil es muy potente";

    console.log("ProductoComponent initialized");
  }
}
