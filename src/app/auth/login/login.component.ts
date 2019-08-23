import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { StorageService } from '../../storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.apagarSidebar();
    this.storageService.deleteUser();
  }

  onSubmit(f: NgForm) {
    this.user = f.value;

    if(this.user.username.toLowerCase() === "cliente"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else if(this.user.username.toLowerCase() === "productor"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else {
      this.errorForm();
    }

  }

  apagarSidebar(){
    document.getElementById("sidebar").hidden = true;
  }

  errorForm(){
    document.getElementById("error").hidden = false;
  }

}
