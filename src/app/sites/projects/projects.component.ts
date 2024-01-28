import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { getSoftwareProjects } from '../../content/projects/software';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild('carouselContainer') carouselContainer?: ElementRef;
  @ViewChildren('carouselPage') pages?: QueryList<ElementRef>;

  backgroundImageUrl = "/assets/images/home/image-2-software.png"; // TODO: make configurable
  carouselItems = getSoftwareProjects();
 

  ngAfterViewInit(): void {
    this.showPage(0)
  }

  private showPage(index: number): void {
    if (index < 0 || (this.pages && index >= this.pages?.length) || !this.pages) {
      return;
    }
    const currentPage = this.pages.toArray()[index];
    currentPage.nativeElement.classList.remove("hidden");
  }


  // ngAfterViewInit(): void {
  //   const container = this.carouselContainer?.nativeElement;

  //   // Your custom carousel logic goes here
  //   // You can implement a basic carousel using CSS for sliding effects

  //   // For example, you can use CSS for basic sliding animation
  //   let currentIndex = 0;

  //   setInterval(() => {
  //     currentIndex = (currentIndex + 1) % this.carouselItems.length;
  //     const offset = -currentIndex * 100; // Assuming each item takes 100% width
  //     container.style.transform = `translateX(${offset}%)`;
  //   }, 3000); // Adjust the interval as needed
  // }
}
