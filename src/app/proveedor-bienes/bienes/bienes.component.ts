import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.scss']
})
export class BienesComponent implements OnInit {
  listProducts = [];

  constructor(private storageService:StorageService, private router: Router) { }

  ngOnInit() {
    this.listProducts = this.storageService.filterByVendedorProductsSiembra("Lechugas");
  }

  navegarARegistro() {
    this.router.navigate(['registrar_bien']);
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
