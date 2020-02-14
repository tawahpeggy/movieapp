import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatremoviesComponent } from './theatremovies.component';

describe('TheatremoviesComponent', () => {
  let component: TheatremoviesComponent;
  let fixture: ComponentFixture<TheatremoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatremoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatremoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
