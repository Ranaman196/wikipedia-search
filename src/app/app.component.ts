import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService) { }
  onTerm(event: string) {
    this.wikipedia.search(event).subscribe((pages) => {
      this.pages = pages
    })

  }
}
