import { Component } from '@angular/core';
import { getCertificationsContent } from '../../content/career/certifications';
import { getMocContent } from '../../content/career/moc';
import { getStudiesContent } from '../../content/career/studies';
import { getWorkContent } from '../../content/career/work';
import { CareerSection } from '../../model/career';
import { GoBackButtonComponent } from '../../shared/components/go-back-button/go-back-button.component';
import { CareerSectionComponent } from './components/career-section/career-section.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [GoBackButtonComponent, CareerSectionComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
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
  selectedSection = this.sections[0];

  // Support variable to trigger transition on section change
  isTransitionTriggered = false;

  onSelectSection(section: CareerSection): void {
    if (section.path == this.selectedSection.path) {
      return;
    }

    this.selectedSection = section;
    this.isTransitionTriggered = !this.isTransitionTriggered;
  }
}
