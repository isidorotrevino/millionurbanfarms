import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss']
})
export class RegistrarProductoComponent implements OnInit {


  constructor() { }
  ngOnInit() {


  }
  EventoAlert() {
    Swal.fire('', 'Save a new product!', 'success');
  }

}
