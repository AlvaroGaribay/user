import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservFormComponent } from './reserv-form.component';

describe('ReservFormComponent', () => {
  let component: ReservFormComponent;
  let fixture: ComponentFixture<ReservFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
