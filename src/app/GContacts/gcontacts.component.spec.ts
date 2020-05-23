import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GContactsComponent } from './gcontacts.component';

describe('GContactsComponent', () => {
  let component: GContactsComponent;
  let fixture: ComponentFixture<GContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
