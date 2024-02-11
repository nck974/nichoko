import { Component } from '@angular/core';
import { getCertificationsContent } from '../../content/career/certifications';
import { getMocContent } from '../../content/career/moc';
import { getStudiesContent } from '../../content/career/studies';
import { getWorkContent } from '../../content/career/work';
import { CareerSection } from '../../model/career';
import { GoBackButtonComponent } from '../../shared/components/go-back-button/go-back-button.component';
import { CareerSectionComponent } from './components/career-section/career-section.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [GoBackButtonComponent, CareerSectionComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  backgroundIndex = 2
  backgroundImageUrl = "/assets/images/home/image-1-career.png"
  sections: CareerSection[] = [
    {
      name: "Work",
      icon: "🛠️",
      path: "work",
      career: getWorkContent(),
    },
    {
      name: "Studies",
      icon: "🎓",
      path: "study",
      career: getStudiesContent(),
    },
    {
      name: "Certifications",
      icon: "📚",
      path: "certification",
      career: getCertificationsContent(),
    },
    {
      name: "Online courses",
      icon: "🖥️",
      path: "moc",
      career: getMocContent(),
    },
  ];
  careerContent = this.sections[0].career;

  onSelectSection(section: CareerSection): void {
    this.careerContent = section.career;
  }
}
