import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getDiyProjects } from '../../content/projects/diy';
import { getSoftwareProjects } from '../../content/projects/software';
import { BackgroundImageComponent } from '../../shared/components/background-image/background-image.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { GoBackButtonComponent } from '../../shared/components/go-back-button/go-back-button.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { NextButtonComponent } from '../../shared/components/next-button/next-button.component';
import { ProjectImageComponent } from './components/project-image/project-image.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NextButtonComponent,
    ChipComponent,
    GoBackButtonComponent,
    BackgroundImageComponent,
    ProjectImageComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer?: ElementRef;
  @ViewChildren('carouselPage') pages?: QueryList<ElementRef>;

  @ViewChild('nextButton') nextButton?: ElementRef;
  @ViewChild('previousButton') previousButton?: ElementRef;

  paramUrlSubscription?: Subscription;
  queryUrlSubscription?: Subscription;
  softwareBackgroundImage = "/assets/images/home/image-2-software.png"
  diyBackgroundImage = "/assets/images/home/image-3-build.png"
  backgroundImageUrl = this.softwareBackgroundImage;
  backgroundIndex = 3;

  carouselItems = getSoftwareProjects();
  currentIndex = 0;

  selectedImage?: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkProjectType();
  }

  ngOnDestroy(): void {
    this.paramUrlSubscription?.unsubscribe();
    this.queryUrlSubscription?.unsubscribe();
  }

  private checkProjectType(): void {
    this.paramUrlSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      const projectType = params.get("projectType");
      if (projectType && projectType == "diy") {
        this.backgroundImageUrl = this.diyBackgroundImage;
        this.carouselItems = getDiyProjects();
        this.backgroundIndex = 4;
      }
      this.checkQueryIndex();
    })
  }

  private checkQueryIndex(): void {
    this.queryUrlSubscription = this.activatedRoute.queryParamMap.subscribe((params) => {
      const indexString = params.get("index");
      if (!indexString) {
        return;
      }
      const index = parseInt(indexString);

      if (index && index > 0 && this.carouselItems && index < this.carouselItems?.length) {
        this.changePage(0, index);
      }
    });
  }


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
    this.storePositionInUrl(nextIndex);
  }


  private storePositionInUrl(index: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { index: index },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  onMoveToNextPage(): void {
    this.changePage(this.currentIndex, this.currentIndex + 1);
  }

  onMoveToPreviousPage(): void {
    this.changePage(this.currentIndex, this.currentIndex - 1);
  }

  showImage(image: string): void {
    this.selectedImage = image;
  }

  hideImage(): void {
    this.selectedImage = null;
  }
}
