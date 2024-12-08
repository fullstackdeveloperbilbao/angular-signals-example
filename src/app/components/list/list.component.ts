import { Component, computed, inject, Signal } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent {
  private readonly dataService = inject(DataService);

  readonly titles!: Signal<string[]>;

  constructor() {
    this.titles = computed(() => {
      return this.dataService.dataSignal().map((item) => item.title);
    });
  }
}
