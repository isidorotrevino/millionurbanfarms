import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-financiamientos',
  templateUrl: './financiamientos.component.html',
  styleUrls: [ './financiamientos.component.scss']
})
export class FinanciamientosComponent implements OnInit {
  listProducts = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.listProducts = this.storageService.getProducts();
  }

  EventoAlert() {
    Swal.fire('', 'Successful!', 'success');
  }

}
