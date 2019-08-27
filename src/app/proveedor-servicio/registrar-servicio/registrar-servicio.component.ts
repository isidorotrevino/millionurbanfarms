import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.scss']
})
export class RegistrarServicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  EventoAlert() {
    Swal.fire('', 'Save a new product!', 'success');
  }
}
