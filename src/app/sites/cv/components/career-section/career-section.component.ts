import { Component, ElementRef, Input } from '@angular/core';
import { CareerCompany } from '../../../../model/career';

@Component({
  selector: 'app-career-section',
  standalone: true,
  imports: [],
  templateUrl: './career-section.component.html',
  styleUrl: './career-section.component.scss',
})
export class CareerSectionComponent {
  @Input({ required: true }) careerContent!: CareerCompany[];

  constructor(private elementRef: ElementRef) { }

  onToggleActivities(companyIndex: number, positionIndex: number): void {

    // Do nothing when there are no activities within a position
    const activities = this.careerContent[companyIndex].positions[positionIndex].activities;
    if (!activities || activities.length == 0) {
      return;
    }

    const element: HTMLElement = this.elementRef.nativeElement
      .querySelector(`#positionActivitiesContainer-${companyIndex}-${positionIndex}`);

    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      setTimeout(() => element.classList.add("show"));
    } else {
      element.classList.remove("show");
      setTimeout(() => element.classList.add("hidden"));
    }
  }
}
