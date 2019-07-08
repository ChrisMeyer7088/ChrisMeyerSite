import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSitePageComponent } from './cm-site-page.component';

describe('CmSitePageComponent', () => {
  let component: CmSitePageComponent;
  let fixture: ComponentFixture<CmSitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmSitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmSitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
