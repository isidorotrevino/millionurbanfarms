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
      { name: "notify-compra", description: "Notify me when I make a purchase", checked: "true" },
      { name: "notify-venta", description: "Notify me when an order is lifted", checked: "false" }
    ]
  }

}
