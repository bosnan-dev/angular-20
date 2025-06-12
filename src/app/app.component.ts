import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from "./producto/producto.component";

@Component({
  selector: 'app-root',
  imports: [ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'First Time Using Angular';
}
