import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftmePageComponent } from './giftme-page.component';

describe('GiftmePageComponent', () => {
  let component: GiftmePageComponent;
  let fixture: ComponentFixture<GiftmePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftmePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
