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
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
