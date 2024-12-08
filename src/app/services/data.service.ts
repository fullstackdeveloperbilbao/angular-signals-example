import { Injectable, signal } from '@angular/core';
import { Data } from '../models/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly data = signal<Data[]>([]);

  get dataSignal() {
    return this.data.asReadonly();
  }

  // request simulation
  fetchData() {
    const newData: Data[] = [
      {
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a97cc6bd-3b7b-44aa-b03d-90717569e29b/dxnwwo-95a4dba9-a6a5-4c73-a567-4c3f00c24607.jpg/v1/fill/w_1024,h_768,q_75,strp/pupy_dogs__3_by_little_drunk_jesus_dxnwwo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYTk3Y2M2YmQtM2I3Yi00NGFhLWIwM2QtOTA3MTc1NjllMjliXC9keG53d28tOTVhNGRiYTktYTZhNS00YzczLWE1NjctNGMzZjAwYzI0NjA3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ShrBRJlt9X27CrEkj8EZr1s6tkjqhIAIMvV1fN8Kdwk',
        title: 'Brown pupy',
      },
      {
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a97cc6bd-3b7b-44aa-b03d-90717569e29b/dxnwso-a8ad02ba-f373-470f-baeb-bebfda554aaa.jpg/v1/fill/w_1024,h_768,q_75,strp/pupy_dogs__2_by_little_drunk_jesus_dxnwso-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYTk3Y2M2YmQtM2I3Yi00NGFhLWIwM2QtOTA3MTc1NjllMjliXC9keG53c28tYThhZDAyYmEtZjM3My00NzBmLWJhZWItYmViZmRhNTU0YWFhLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xHFQ2oacJqg1pyqs9Ax4bQw7CtIt0f0Af3zxWWyUi1U',
        title: '2 pupies',
      },
    ];
    setTimeout(() => {
      this.data.set(newData);
    }, 1000);
  }

  reverseData() {
    this.data.update((data) => {
      const reversedData = data.reverse();
      return reversedData.slice();
    });
  }
}
