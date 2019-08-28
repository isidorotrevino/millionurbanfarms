import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-comprar-productor',
  templateUrl: './comprar-productor.component.html',
  styleUrls: ['./comprar-productor.component.scss']
})
export class ComprarProductorComponent implements OnInit {
  listProducts = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.listProducts = this.storageService.getProductsSiembra();
  }

  EventoAlert() {
    Swal.fire('', 'Successful Purchase!', 'success');
  }

  searchProduct(){
    let query = {criterio: (<HTMLInputElement>document.getElementById("criterio")).value, cadena: (<HTMLInputElement>document.getElementById("cadena")).value};
    if(query.criterio === "NAME"){
      this.listProducts = this.storageService.filterByNameProducts(query.cadena);
    } else if(query.criterio === "MORE THAN"){
      this.listProducts = this.storageService.filterMorePriceProducts(parseInt(query.cadena));
    } else if(query.criterio === "LESS THAN"){
      this.listProducts = this.storageService.filterLessPriceProducts(parseInt(query.cadena));
    }
  }

}