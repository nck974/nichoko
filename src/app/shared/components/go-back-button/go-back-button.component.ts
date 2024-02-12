import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NextButtonComponent } from '../next-button/next-button.component';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [
    NextButtonComponent
  ],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss'
})
export class GoBackButtonComponent {


  constructor(private location: Location) { }

  onGoBack(): void {
    this.location.back();
  }

}
