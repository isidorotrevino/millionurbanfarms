import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Modulos
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { DashboardProvComponent } from './proveedor/dashboard-prov/dashboard-prov.component';
import { DashboardProdComponent } from './productor/dashboard-prod/dashboard-prod.component';
import { ProductorComponent } from './productor/productor.component';
import { InversionistaComponent } from './inversionista/inversionista.component';
import { DashboardInvComponent } from './inversionista/dashboard-inv/dashboard-inv.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardClienteComponent } from './cliente/dashboard-cliente/dashboard-cliente.component';
import { ComprarClienteComponent } from './cliente/comprar-cliente/comprar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProveedorComponent,
    DashboardProvComponent,
    DashboardProdComponent,
    ProductorComponent,
    InversionistaComponent,
    DashboardInvComponent,
    ClienteComponent,
    DashboardClienteComponent,
    ComprarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatSidenavModule,
    NoopAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
