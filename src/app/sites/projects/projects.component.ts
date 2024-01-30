import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { getSoftwareProjects } from '../../content/projects/software';
import { NextButtonComponent } from '../../shared/components/next-button/next-button.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NextButtonComponent, ChipComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild('carouselContainer') carouselContainer?: ElementRef;
  @ViewChildren('carouselPage') pages?: QueryList<ElementRef>;

  @ViewChild('nextButton') nextButton?: ElementRef;
  @ViewChild('previousButton') previousButton?: ElementRef;

  backgroundImageUrl = "/assets/images/home/image-2-software.png"; // TODO: make configurable
  carouselItems = getSoftwareProjects();
  currentIndex = 0;


  private showPage(index: number): void {
    if (index < 0 || (this.pages && index >= this.pages?.length) || !this.pages) {
      return;
    }
    const currentPage = this.pages.toArray()[index];
    currentPage.nativeElement.classList.remove("hidden");
  }

  private hidePage(index: number): void {
    if (index < 0 || (this.pages && index >= this.pages?.length) || !this.pages) {
      return;
    }
    const currentPage = this.pages.toArray()[index];
    currentPage.nativeElement.classList.add("hidden");
  }

  private changePage(currentIndex: number, nextIndex: number): void {
    this.hidePage(currentIndex);
    this.showPage(nextIndex);
    this.currentIndex = nextIndex;
  }

  onMoveToNextPage(): void {
    this.changePage(this.currentIndex, this.currentIndex + 1);
  }

  onMoveToPreviousPage(): void {
    this.changePage(this.currentIndex, this.currentIndex - 1);
  }
}
