import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage/storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  listServices = [];

  constructor(private storageService:StorageService, private router: Router) { }

  ngOnInit() {
    this.listServices = this.storageService.filterByVendedorServices("Entregueitor12");
  }

  navegarARegistro() {
    this.router.navigate(['registrar_servicio']);
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

}
