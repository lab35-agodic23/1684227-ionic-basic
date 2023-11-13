import { Component, OnInit } from '@angular/core';
import { alumno } from './alumno.model';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  alumnos:any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
  constructor(private actionSheetCtrl: ActionSheetController) { }
  result: string = '';

  agregarAlumno():void{
    this.alumnos.push(this.alumnos);

    this.alumnos = {
      nombre: '',
      presente: false
    }

    alumno: this.alumnos= {
      nombre: '',
      presente: false
    }
  }
  ngOnInit() {}
}
