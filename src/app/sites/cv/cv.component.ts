import { Component, ElementRef } from '@angular/core';
import { getCareerContent } from '../../content/career/career';
import { GoBackButtonComponent } from '../../shared/components/go-back-button/go-back-button.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [GoBackButtonComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  backgroundIndex = 2
  backgroundImageUrl = "/assets/images/home/image-1-career.png"
  careerContent = getCareerContent();

  constructor(private elementRef: ElementRef) { }

  onToggleActivities(companyIndex: number, positionIndex: number): void {
    const element: HTMLElement  = this.elementRef.nativeElement
      .querySelector(`#positionActivitiesContainer-${companyIndex}-${positionIndex}`);
    
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      setTimeout(() => element.classList.add("show"));
    }else{
      element.classList.remove("show");
      setTimeout(() => element.classList.add("hidden"));
    }
  }
}
