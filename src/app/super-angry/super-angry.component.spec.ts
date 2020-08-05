import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAngryComponent } from './super-angry.component';

describe('SuperAngryComponent', () => {
  let component: SuperAngryComponent;
  let fixture: ComponentFixture<SuperAngryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAngryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
