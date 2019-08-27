import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos-proveedor-b',
  templateUrl: './pedidos-proveedor-b.component.html',
  styleUrls: ['./pedidos-proveedor-b.component.scss']
})
export class PedidosProveedorBComponent implements OnInit {
  listProducts = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.listProducts = this.storageService.filterByVendedorProductsSiembra("ElLechugas");
  }

  eventoAlert(){
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
  }

  eventoAlert1(){
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Canceled!',
            'success'
          )
        }
      });
  }

}
