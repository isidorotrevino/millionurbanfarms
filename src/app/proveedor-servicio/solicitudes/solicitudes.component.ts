import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  services = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    if(this.storageService.getUsername() === "proveedors"){
      this.services = this.storageService.filterByServiceServices("Entregueitor12");
    }
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
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Canceled!',
            'The service has been canceled.',
            'success'
          )
        }
      });
  }

}
