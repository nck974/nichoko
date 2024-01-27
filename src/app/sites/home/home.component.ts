import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { getHomePageContent } from '../../content/home/pageContent';
import { PageContent } from '../../model/PageContent';
import { NextButtonComponent } from '../../shared/components/next-button/next-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NextButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChildren('page') pages?: QueryList<ElementRef>;

  pagesContent: PageContent[] = getHomePageContent()
  latestLoadedIndex = 0;

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
      image?.classList.add('show-image');
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
  }


  /**
   * Show the first animation when the page is loaded
   */
  ngAfterViewInit(): void {
    this.showPageContent(0);
  }


  onClickNext(index: number): void {
    this.navigateToPage(index + 1);
  }

}
