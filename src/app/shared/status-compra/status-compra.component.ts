import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-status-compra',
  templateUrl: './status-compra.component.html',
  styleUrls: [ './status-compra.component.scss']
})
export class StatusCompraComponent implements OnInit {
  listProducts = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    if(this.storageService.getUsername() === "client@test.com"){
      this.listProducts = this.storageService.getThreeProductsStatus();
    }

    if(this.storageService.getUsername() === "producer@test.com"){
      this.listProducts = this.storageService.getProductsSiembra();
    }
  }

}
