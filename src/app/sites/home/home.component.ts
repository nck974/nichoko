import { CommonModule, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getHomePageContent } from '../../content/home/page-content';
import { PageContent } from '../../model/PageContent';
import { NextButtonComponent } from '../../shared/components/next-button/next-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NextButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('page') pages?: QueryList<ElementRef>;

  pagesContent: PageContent[] = getHomePageContent()
  latestLoadedIndex = 0;
  urlSubscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller) { }

  ngOnDestroy(): void {
    this.urlSubscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.urlSubscription = this.activatedRoute.queryParamMap.subscribe((params) => {
      const indexString = params.get("index");
      if (!indexString) {
        this.showPageContent(0);
        return;
      }
      const index = parseInt(indexString);
      if (index && index > 0 && this.pagesContent && index < this.pagesContent?.length) {
        // Load all pages until the given index
        for (let i = 0; i <= index; i++) {
          this.navigateToPage(i);
        }
      } else {
        this.showPageContent(0);
      }
    })

  }

  private showNextButton(index: number, page: ElementRef<any>): void {
    if (!this.pages || index >= this.pages?.length - 1) {
      return;
    }

    const nextButton = page.nativeElement.querySelector(`#nextButtonWrapper-${index}`);
    nextButton.classList.remove("hidden");

  }

  private hidePreviousNextButton(index: number): void {
    if (!this.pages || index == 0) {
      return;
    }

    const previousIndex = index - 1;
    const previousPage = this.pages?.toArray()[previousIndex];

    const nextButton = previousPage.nativeElement.querySelector(`#nextButtonWrapper-${previousIndex}`);
    nextButton.classList.add("hidden");
  }

  private showBackgroundImage(page: ElementRef<any>, index: number): void {
    const image = page.nativeElement.querySelector(`#backgroundImage-${index}`);
    setTimeout(() => {
      image?.classList.add('show');
    }, 100);
  }

  private showText(page: ElementRef<any>, index: number) {
    page.nativeElement.classList.remove("hidden");
    const pageContent = page.nativeElement.querySelector(`#textContent-${index}`);
    setTimeout(() => {
      pageContent?.classList.add('show');
    }, 100);
  }

  private showPageContent(index: number) {
    const page = this.pages?.toArray()[index];

    if (!page) return;

    this.showNextButton(index, page);
    this.hidePreviousNextButton(index);
    this.showText(page, index);
    this.showBackgroundImage(page, index);
  }

  private navigateToPage(newIndex: number): void {
    if (newIndex < 0 || newIndex >= (this.pages?.length ?? 0)) return;

    this.showPageContent(newIndex);

    const currentPage = this.pages?.toArray()[newIndex];
    currentPage?.nativeElement.scrollIntoView({ behavior: 'smooth' });

    this.latestLoadedIndex = newIndex;
    this.storePositionInUrl(newIndex)

  }

  private storePositionInUrl(index: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { index: index },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  onClickNext(index: number): void {
    this.navigateToPage(index + 1);
  }

  openMail(url: string): void {
    window.open(url);
  }

  onNavigate(url: string, currentIndex: number): void {
    if (url.startsWith("mailto:")) {
      this.openMail(url);
      return;
    }

    this.storePositionInUrl(currentIndex);
    setTimeout(() => {
      this.router.navigateByUrl(url).then(() => {
        // Fix bug that when accessing the page it appears scrolled down
        this.viewportScroller.scrollToPosition([0, 0]);
      });
    });
  }

}
