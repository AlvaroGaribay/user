import { Component,HostBinding, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-hab-list',
  templateUrl: './hab-list.component.html',
  styleUrls: ['./hab-list.component.css']
})
export class HabListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  habs: any = [];

  constructor(private habService: NoteService) { }

  ngOnInit(): void {
    this.getHabs();
  }

  getHabs() {
    this.habService.getHabs().subscribe(
      res => {
        this.habs = res;
      },
      err => console.error
    )
  }

  deleteHab(id: string) {
    this.habService.deleteHab(id).subscribe(
      res => {
        console.log(res);
        this.getHabs();
      },
      err => console.error(err)
    )
  }


}