import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservListComponent } from './reserv-list.component';

describe('ReservListComponent', () => {
  let component: ReservListComponent;
  let fixture: ComponentFixture<ReservListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
