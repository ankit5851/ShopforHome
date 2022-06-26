import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallshelfComponent } from './wallshelf.component';

describe('WallshelfComponent', () => {
  let component: WallshelfComponent;
  let fixture: ComponentFixture<WallshelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallshelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
