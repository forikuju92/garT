import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GServicesComponent } from './gservices.component';

describe('GServicesComponent', () => {
  let component: GServicesComponent;
  let fixture: ComponentFixture<GServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
