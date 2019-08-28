import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
import { RegistrarBienComponent } from './proveedor-bienes/registrar-bien/registrar-bien.component';
import { PedidosProveedorBComponent } from './proveedor-bienes/pedidos-proveedor-b/pedidos-proveedor-b.component';
import { BienesComponent } from './proveedor-bienes/bienes/bienes.component';
import { RegistrarServicioComponent } from './proveedor-servicio/registrar-servicio/registrar-servicio.component';
import { ServiciosComponent } from './proveedor-servicio/servicios/servicios.component';
import { SolicitudesComponent } from './proveedor-servicio/solicitudes/solicitudes.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { HelpComponent } from './shared/help/help.component';
import { SettingsComponent } from './shared/settings/settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'comprar_cliente', component: ComprarClienteComponent },
  { path: 'status', component: StatusCompraComponent },
  { path: 'historial_cliente', component: HistorialComprasComponent },
  { path: 'registrar_producto', component: RegistrarProductoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'financiate', component: FinanciateComponent },
  { path: 'financiamiento', component: FinanciamientoComponent },
  { path: 'pedidos_productor', component: PedidosProductorComponent },
  { path: 'historial_productor', component: HistorialProductorComponent },
  { path: 'comprar_productor', component: ComprarProductorComponent },
  { path: 'financiar_cosecha', component: FinanciamientosComponent },
  { path: 'historial_inversiones', component: HistorialInversionComponent },
  { path: 'registrar_bien', component: RegistrarBienComponent },
  { path: 'pedidos_proveedor_bien', component: PedidosProveedorBComponent },
  { path: 'productos_bien', component: BienesComponent },
  { path: 'registrar_servicio', component: RegistrarServicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'about_us', component: AboutUsComponent},
  { path: 'help', component: HelpComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
