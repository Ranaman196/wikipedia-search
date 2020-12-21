import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submited = new EventEmitter<string>();

  term = '';
  constructor() { }

  ngOnInit(): void {
  }


  onFormSubmit(event: any) {
    event.preventDefault();
    this.submited.emit(this.term);
  }
}
