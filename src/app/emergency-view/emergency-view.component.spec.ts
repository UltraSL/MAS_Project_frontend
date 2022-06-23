import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyViewComponent } from './emergency-view.component';

describe('EmergencyViewComponent', () => {
  let component: EmergencyViewComponent;
  let fixture: ComponentFixture<EmergencyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
