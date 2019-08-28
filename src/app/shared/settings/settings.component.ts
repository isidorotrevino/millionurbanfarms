import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings = [];

  constructor() { }

  ngOnInit() {
    this.settings = [
      { name: "notify-compra", description: "Notificarme cuando realice una compra", checked: "true" },
      { name: "notify-venta", description: "Notificarme cuando realice una venta", checked: "false" }
    ]
  }

}
