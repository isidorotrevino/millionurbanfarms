import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-financiate',
  templateUrl: './financiate.component.html',
  styleUrls: ['./financiate.component.scss']
})
export class FinanciateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  EventoAlert() {
    Swal.fire('', 'Create a new financing!', 'success');
  }

}
