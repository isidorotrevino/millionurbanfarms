import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { SimpleState } from '../../storage/redux/simple.interface';

import { StorageService } from '../../storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;

  constructor(private router: Router, private storageService: StorageService, 
    private storageSimpleState: Store<SimpleState>) { }

  ngOnInit() {
    this.apagarSidebar();
    this.storageService.deleteUser();
  }

  onSubmit(f: NgForm) {
    this.user = f.value;
    this.changeMessage(this.user.username);

    if(this.user.username.toLowerCase() === "cliente"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else if(this.user.username.toLowerCase() === "productor"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else if (this.user.username.toLowerCase() === "inversionista"){
    this.storageService.registerUser(this.user);
    this.router.navigate(['dashboard']);
    } else if(this.user.username.toLowerCase() === "proveedorb"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else if(this.user.username.toLowerCase() === "proveedors"){
      this.storageService.registerUser(this.user);
      this.router.navigate(['dashboard']);
    } else {
      this.errorForm();
    }

  }

  changeMessage(user: string) {
    this.storageSimpleState.dispatch({type: user});
  }

  apagarSidebar(){
    document.getElementById("sidebar").hidden = true;
  }

  errorForm(){
    document.getElementById("error").hidden = false;
  }

}
