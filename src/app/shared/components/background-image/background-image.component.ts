import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [],
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.scss'
})
export class BackgroundImageComponent {
  @Input({ required: true }) backgroundImageUrl!: string;
}
