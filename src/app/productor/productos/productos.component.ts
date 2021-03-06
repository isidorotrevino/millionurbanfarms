import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  listProducts = [];

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.listProducts.push((this.storageService.getProducts())[0]);
  }

  navegarARegistro(){
    this.router.navigate(['registrar_producto']);
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
