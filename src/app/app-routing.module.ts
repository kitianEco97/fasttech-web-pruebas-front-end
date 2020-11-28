import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsComponent},  
  { path: 'product/:id', component: ProductComponent},  
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
