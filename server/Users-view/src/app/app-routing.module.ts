import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabFormComponent } from './componentes/hab-form/hab-form.component';
import { HabListComponent } from './componentes/hab-list/hab-list.component';
import { NotasFormComponent } from './componentes/notas-form/notas-form.component';
import { NotasListComponent } from './componentes/notas-list/notas-list.component'
import { ReservFormComponent } from './componentes/reserv-form/reserv-form.component';
import { ReservListComponent } from './componentes/reserv-list/reserv-list.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/notes',
  pathMatch: 'full'  
},
{
  path:'notes',
  component: NotasListComponent
},
{
  path:'notes/notes/add',
  component: NotasFormComponent
},
{
  path:'notes/edit/:id',
  component:NotasFormComponent
},
{
  path:'reservaciones',
  component: ReservFormComponent
},
{
  path:'huesped',
  component: ReservListComponent
},
{
  path:'huesped/edit/:id',
  component: ReservFormComponent
},
{
  path:'huesped/add',
  component: ReservFormComponent
},
{
  path:'huesped/edit/:id',
  component: ReservFormComponent
},
{
  path:'habitaciones',
  component: HabListComponent
},
{
  path:'habitaciones/edit/:id',
  component: HabFormComponent
},
{
  path:'habitaciones/habitaciones/add',
  component: HabFormComponent
},
{
  path:'habitaiones/edit/:id',
  component: HabFormComponent
}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
