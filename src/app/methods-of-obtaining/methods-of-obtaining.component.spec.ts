import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsOfObtainingComponent } from './methods-of-obtaining.component';

describe('MethodsOfObtainingComponent', () => {
  let component: MethodsOfObtainingComponent;
  let fixture: ComponentFixture<MethodsOfObtainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodsOfObtainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsOfObtainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
