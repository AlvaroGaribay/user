import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabListComponent } from './hab-list.component';

describe('HabListComponent', () => {
  let component: HabListComponent;
  let fixture: ComponentFixture<HabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
