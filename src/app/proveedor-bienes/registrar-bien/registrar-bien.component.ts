import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-bien',
  templateUrl: './registrar-bien.component.html',
  styleUrls: ['./registrar-bien.component.scss']
})
export class RegistrarBienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  EventoAlert() {
    Swal.fire('', 'Save a new product!', 'success');
  }

}
