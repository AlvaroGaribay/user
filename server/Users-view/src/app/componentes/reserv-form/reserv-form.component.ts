import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Reserv } from 'src/app/models/Reserv'
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router'
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'app-reserv-form',
  templateUrl: './reserv-form.component.html',
  styleUrls: ['./reserv-form.component.css']
})
export class ReservFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  reserv : Reserv = {
    id: 0,
    nombre: '',
    apellido_pat: '',
    habitacion: 0,
    personas: 0,
    telefono: '',
    t_habitacion: '',
    precio: 0,
    created_at: new Date()
  };

  edit: boolean = false;
  constructor( private _CargaScripts:CargarScriptsService, private reservService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) { 
    _CargaScripts.Carga(["forms/forms"]);
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.reservService.getReserv(params['id'])
      .subscribe(
        res=> {
          console.log(res);
          this.reserv = res;
          this.edit = true;
        },
        err=> console.error(err)
      )
    }
  }

  saveNewReserv() {
    delete this.reserv.created_at;
    delete this.reserv.id;
    
    this.reservService.saveReserv(this.reserv)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/huesped']);
      },
      err => console.log(err)
    );

  }

  updateReserv() {
    delete this.reserv.created_at;

    this.reservService.updateReserv(this.reserv.id!, this.reserv)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/huesped']);
      },
      err => console.log(err)
    )
  }
}
