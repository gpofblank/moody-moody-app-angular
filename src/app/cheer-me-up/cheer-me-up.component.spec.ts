import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerMeUpComponent } from './cheer-me-up.component';

describe('CheerMeUpComponent', () => {
  let component: CheerMeUpComponent;
  let fixture: ComponentFixture<CheerMeUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerMeUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerMeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
