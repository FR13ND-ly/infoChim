import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryPropertiesComponent } from './chemistry-properties.component';

describe('ChemistryPropertiesComponent', () => {
  let component: ChemistryPropertiesComponent;
  let fixture: ComponentFixture<ChemistryPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemistryPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
