import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.prenderSidebar();

    if(this.storageService.getUsername() === "cliente"){
      this.items = [
        {name:"Buy", route:"../comprar_cliente", icon:"fas fa-cart-plus fa-5x icon-option"},
        {name:"Record", route:"../historial_cliente", icon:"fas fa-file-invoice-dollar fa-5x icon-option"},
        {name:"Status", route:"../status", icon:"fas fa-chart-bar fa-5x icon-option"}
      ]
    }

    if(this.storageService.getUsername() === "productor"){
      this.items = [
        {name:"Buy", route:"../comprar_productor", icon:"fas fa-cart-plus fa-5x icon-option"},
        {name:"Order", route:"../pedidos_productor", icon:"fas fa-cash-register fa-5x icon-option"},
        {name:"Add", route:"../registrar_producto", icon:"fas fa-plus-circle fa-5x icon-option"},
        {name:"Products", route:"../productos", icon:"fas fa-th-list fa-5x icon-option"},
        {name:"Finance", route:"../financiate", icon:"far fa-money-bill-alt fa-5x icon-option"},
        {name:"Funding", route:"../financiamiento", icon:"fas fa-university fa-5x icon-option"},
        {name:"Status", route:"../status", icon:"fas fa-chart-bar fa-5x icon-option"},
      ]
    }

  }

  prenderSidebar(){
    document.getElementById("sidebar").hidden = false;
  }

}
