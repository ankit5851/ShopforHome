import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpiecesComponent } from './showpieces.component';

describe('ShowpiecesComponent', () => {
  let component: ShowpiecesComponent;
  let fixture: ComponentFixture<ShowpiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpiecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
