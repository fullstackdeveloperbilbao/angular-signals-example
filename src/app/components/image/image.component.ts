import { Component, computed, inject, Signal } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.sass',
})
export class ImageComponent {
  private readonly dataService = inject(DataService);

  readonly imageUrls!: Signal<string[]>;

  constructor() {
    this.imageUrls = computed(() => {
      return this.dataService.dataSignal().map((item) => item.imageUrl);
    });
  }
}
