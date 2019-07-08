import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointmapPageComponent } from './pointmap-page.component';

describe('PointmapPageComponent', () => {
  let component: PointmapPageComponent;
  let fixture: ComponentFixture<PointmapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointmapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointmapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
