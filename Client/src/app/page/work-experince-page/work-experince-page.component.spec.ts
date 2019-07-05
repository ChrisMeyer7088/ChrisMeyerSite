import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperincePageComponent } from './work-experince-page.component';

describe('WorkExperincePageComponent', () => {
  let component: WorkExperincePageComponent;
  let fixture: ComponentFixture<WorkExperincePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperincePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
