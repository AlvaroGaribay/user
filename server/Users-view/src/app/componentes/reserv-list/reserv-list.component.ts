import { Component, HostBinding, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service'

@Component({
  selector: 'app-reserv-list',
  templateUrl: './reserv-list.component.html',
  styleUrls: ['./reserv-list.component.css']
})
export class ReservListComponent implements OnInit {

  
  @HostBinding('class') classes = 'row';
  reservs: any = [];

  constructor(private reservServices: NoteService) { }

  ngOnInit(): void {
    this.getReservs();
  }

  getReservs() {
    this.reservServices.getReservs().subscribe(
      res => {
        this.reservs = res;
      },
      err => console.error
    )
  }

  deleteReserv(id: string) {
    this.reservServices.deleteReserv(id).subscribe(
      res => {
        console.log(res);
        this.getReservs();
      },
      err => console.error(err)
    )
  }
}
