import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PageContent } from '../../model/PageContent';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChildren('page') pages?: QueryList<ElementRef>;
  @ViewChild('prev') prev?: ElementRef;
  @ViewChild('next') next?: ElementRef;

  pagesContent: PageContent[] = [
    {
      title: "Welcome to my page!",
      body: "If you have arrived here you already know my name 😊, so there is no need to have it here.",
      image: "/assets/images/home/image-0-cover.png",
      altNameImage: "Cover",
    },
    {
      title: "What have I been working on?",
      body: "I am a Telecommunications Engineer who has been working verifying and creating software for the past six years.",
      clickText: "Career",
      link: "/career",
      image: "/assets/images/home/image-1-career.png",
      altNameImage: "Career"
    },
    {
      title: "Not only for work!",
      body: "I take the time to always be creating some personal projects while learning new technologies.",
      clickText: "My latest projects",
      link: "/projects/software",
      image: "/assets/images/home/image-2-software.png",
      altNameImage: "Software",
    },
    {
      title: "Not only software!",
      body: "I also like to keep building outside of the screen on my own if possible.",
      clickText: "Check some of my other projects",
      link: "/projects/diy",
      image: "/assets/images/home/image-3-build.png",
      altNameImage: "Build",
    },
    {
      title: "Contact",
      body: "If you are here probably you already now how to contact me, should not be the case reach me through:",
      clickText: "nck.dev.app@gmail.com",
      link: "mailto:nck.dev.app@gmail.com",
      image: "/assets/images/home/image-4-mail.png",
      altNameImage: "Mail",
    },
  ]

  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;

  private togglePageContent(index: number, show: boolean) {
    const page = this.pages?.toArray()[index];
    if (!page) return;

    // Display current next button
    if (this.pages && index != this.pages?.length - 1) {
      const nextButton = page.nativeElement.querySelector('.nav');
      nextButton.classList.remove("hidden");
    }

    // Hide previous next button
    if (this.pages && index > 0) {
      const previousPage = this.pages?.toArray()[index - 1]
      const nextButton = previousPage.nativeElement.querySelector('.nav');
      nextButton.classList.add("hidden");
    }

    // Show text
    page.nativeElement.classList.remove("hidden");
    const pageContent = page.nativeElement.querySelector('.page-content');
    if (show) {
      setTimeout(() => {
        pageContent?.classList.add('show');
      });
    }

    // Show image
    const image = page.nativeElement.querySelector('.background-image');
    if (show) {
      setTimeout(() => {
        image?.classList.add('show-image');
      });
    }

  }

  ngAfterViewInit() {
    this.togglePageContent(0, true);
  }

  private navigateToIndex(newIndex: number) {
    if (newIndex < 0 || newIndex >= (this.pages?.length ?? 0)) return;

    this.togglePageContent(this.index, false);
    this.index = newIndex;
    this.togglePageContent(this.index, true);

    const currentPage = this.pages?.toArray()[this.index];
    currentPage?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  clickNext(index: number): void {
    this.navigateToIndex(index + 1);
  }

  // @HostListener('wheel', ['$event'])
  // onMouseWheel(event: WheelEvent) {
  //   const delta = event.deltaY;
  //   const timeNow = new Date().getTime();
  //   console.log(event);
  //   // console.log("Delta " + delta + " timenow " + timeNow)
  //   // console.log("this.lastAnimation " + this.lastAnimation)
  //   // console.log(timeNow - this.lastAnimation)
  //   if (
  //     timeNow - this.lastAnimation <
  //     this.idlePeriod + this.animationDuration
  //     ) {
  //       console.log("Preventing default ")
  //       event.preventDefault();
  //     return;
  //   }

  //   if (delta > 0) {
  //     this.next?.nativeElement.click();
  //   } else {
  //     this.prev?.nativeElement.click();
  //   }

  //   this.lastAnimation = timeNow;
  // }
}
