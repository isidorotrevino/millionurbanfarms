import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//check animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductorComponent } from './productor/productor.component';
import { InversionistaComponent } from './inversionista/inversionista.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ComprarClienteComponent } from './cliente/comprar-cliente/comprar-cliente.component';
import { StatusCompraComponent } from './shared/status-compra/status-compra.component';
import { HistorialComprasComponent } from './cliente/historial-compras/historial-compras.component';
import { RegistrarProductoComponent } from './productor/registrar-producto/registrar-producto.component';
import { ProductosComponent } from './productor/productos/productos.component';
import { FinanciateComponent } from './productor/financiate/financiate.component';
import { FinanciamientoComponent } from './productor/financiamiento/financiamiento.component';
import { PedidosProductorComponent } from './productor/pedidos-productor/pedidos-productor.component';
import { HistorialProductorComponent } from './productor/historial-productor/historial-productor.component';
import { ComprarProductorComponent } from './productor/comprar-productor/comprar-productor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProveedorComponent,
    ProductorComponent,
    InversionistaComponent,
    ClienteComponent,
    DashboardComponent,
    ComprarClienteComponent,
    StatusCompraComponent,
    HistorialComprasComponent,
    RegistrarProductoComponent,
    ProductosComponent,
    FinanciateComponent,
    FinanciamientoComponent,
    PedidosProductorComponent,
    HistorialProductorComponent,
    ComprarProductorComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
