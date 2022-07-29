import { Component,HostBinding , OnInit } from '@angular/core';
import { Hab } from 'src/app/models/Hab'
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-hab-form',
  templateUrl: './hab-form.component.html',
  styleUrls: ['./hab-form.component.css']
})
export class HabFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  hab : Hab = {
    id: 0,
    estado: '',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/294111593.jpg?k=1a11c931cc7796ce52d60fceb36c1c427bfe9129069d485855cd3c012b20da28&o=&hp=1',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private habService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.habService.getHab(params['id'])
      .subscribe(
        res=> {
          console.log(res);
          this.hab = res;
          this.edit = true;
        },
        err=> console.error(err)
      )
    }

  }

  saveNewHab() {
    delete this.hab.created_at;
    
    this.habService.saveHab(this.hab)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/habitaciones']);
      },
      err => console.log(err)
    );

  }

  updateHab() {
    delete this.hab.created_at;
    this.habService.updateHab(this.hab.id!, this.hab)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/habitaciones']);
      },
      err => console.log(err)
    )
  }

}
