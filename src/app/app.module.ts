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
import { HistorialInversionComponent } from './inversionista/historial-inversion/historial-inversion.component';
import { FinanciamientosComponent } from './inversionista/financiamientos/financiamientos.component';
import { BienesComponent } from './proveedor-bienes/bienes/bienes.component';
import { PedidosProveedorBComponent } from './proveedor-bienes/pedidos-proveedor-b/pedidos-proveedor-b.component';
import { RegistrarBienComponent } from './proveedor-bienes/registrar-bien/registrar-bien.component';
import { ProveedorServicioComponent } from './proveedor-servicio/proveedor-servicio.component';
import { RegistrarServicioComponent } from './proveedor-servicio/registrar-servicio/registrar-servicio.component';
import { ServiciosComponent } from './proveedor-servicio/servicios/servicios.component';
import { SolicitudesComponent } from './proveedor-servicio/solicitudes/solicitudes.component';
import { SettingsComponent } from './shared/settings/settings.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './storage/redux/simple.reducer';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { HelpComponent } from './shared/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
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
    ComprarProductorComponent,
    HistorialInversionComponent,
    FinanciamientosComponent,
    BienesComponent,
    PedidosProveedorBComponent,
    RegistrarBienComponent,
    ProveedorServicioComponent,
    RegistrarServicioComponent,
    ServiciosComponent,
    SolicitudesComponent,
    SettingsComponent, 
    AboutUsComponent,
    HelpComponent
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
    BsDatepickerModule.forRoot(),
    StoreModule.forRoot({ message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
