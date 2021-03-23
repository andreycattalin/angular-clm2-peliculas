import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showBlue = true;
  showGreen = false;

  txtButton = "Mostrar mensaje"

  newPelicula = ""
  allPeliculas = ["Iron Man", "Superman 2", "Spiderman", "Wonder Woman"]

  changeGreen() {
    this.showGreen = !this.showGreen

    if(this.showGreen) {
      this.txtButton = "Ocultar mensaje"
    } else {
      this.txtButton = "Mostrar mensaje"
    }
  }

  addPelicula(data: any) {
    this.allPeliculas.push(data.value)
    data.value = ""
  }

  deletePeli(position: number) {
    console.log("Quiero eliminar la posicion " + position + " que corresponde a " + this.allPeliculas[position]);

    // splice primer parametro es de la posicion que quiero eliminar
    // y el segundo, cuantos quiero eliminar
    this.allPeliculas.splice(position,1)
  }


}
