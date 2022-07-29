import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para las peticiones http
import { HttpClientModule } from '@angular/common/http';
//Para los formularios
import { FormsModule } from '@angular/forms';

import { CargarScriptsService } from './services/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { NotasFormComponent } from './componentes/notas-form/notas-form.component';
import { NotasListComponent } from './componentes/notas-list/notas-list.component';

import { NoteService} from './services/note.service';
import { ReservListComponent } from './componentes/reserv-list/reserv-list.component';
import { ReservFormComponent } from './componentes/reserv-form/reserv-form.component';
import { HabListComponent } from './componentes/hab-list/hab-list.component';
import { HabFormComponent } from './componentes/hab-form/hab-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    NotasFormComponent,
    NotasListComponent,
    ReservListComponent,
    ReservFormComponent,
    HabListComponent,
    HabFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NoteService,
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
