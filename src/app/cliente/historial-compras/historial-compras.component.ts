import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.scss']
})
export class HistorialComprasComponent implements OnInit {
  products = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.products = this.storageService.getProducts();
  }
  EventoAlert(){
  Swal.fire ({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }) .then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}

}
