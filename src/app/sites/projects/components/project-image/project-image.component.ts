import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-project-image',
  standalone: true,
  imports: [LoadingSpinnerComponent],
  templateUrl: './project-image.component.html',
  styleUrl: './project-image.component.scss'
})
export class ProjectImageComponent {
  @Input({ required: true }) image!: string;
  @Output() imageClick: EventEmitter<string> = new EventEmitter();
  loading = true;

  onClick(): void {
    this.imageClick.emit(this.image);
  }

  onImageLoaded(): void {
    this.loading = false;
  }

  onImageError(): void {
    this.loading = false;
  }
}
