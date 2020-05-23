import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GProductsComponent } from './gproducts.component';

describe('GProductsComponent', () => {
  let component: GProductsComponent;
  let fixture: ComponentFixture<GProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
