import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-historial-productor',
  templateUrl: './historial-productor.component.html',
  styleUrls: ['./historial-productor.component.scss']
})
export class HistorialProductorComponent implements OnInit {
  productsSiembra = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.productsSiembra = this.storageService.getProductsSiembra();
  }
  EventoAlert() {
    Swal.fire ({
      title: 'Are you sure?',
      text: "You won't be able to revert this!" ,
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
        );
      }
    });
  }

}
