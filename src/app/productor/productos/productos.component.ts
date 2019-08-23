import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';
import { Router } from '@angular/router';

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

}
