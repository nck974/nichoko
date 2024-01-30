import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) color!: string;
}