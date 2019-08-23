import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.scss']
})
export class FinanciamientoComponent implements OnInit {
  listProducts = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.listProducts = this.storageService.filterByNameProducts("let");
    this.listProducts.forEach((product)=>{
      console.log(product);
    });
  }

}
