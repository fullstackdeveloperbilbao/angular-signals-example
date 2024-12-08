import { Component, inject } from '@angular/core';
import { ImageComponent } from './components/image/image.component';
import { ListComponent } from './components/list/list.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly dataService = inject(DataService);

  fetchData() {
    this.dataService.fetchData();
  }

  reverseData() {
    this.dataService.reverseData();
  }
}
