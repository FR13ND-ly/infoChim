import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsPropertiesComponent } from './physics-properties.component';

describe('PhysicsPropertiesComponent', () => {
  let component: PhysicsPropertiesComponent;
  let fixture: ComponentFixture<PhysicsPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
