import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-button',
  standalone: true,
  imports: [],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.scss'
})
export class NextButtonComponent {
  @Input({ required: true }) onClick!: () => void;
  @Input({ required: true }) direction!: string;

}
