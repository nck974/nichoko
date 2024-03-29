import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSectionComponent } from './career-section.component';

describe('CareerSectionComponent', () => {
  let component: CareerSectionComponent;
  let fixture: ComponentFixture<CareerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
