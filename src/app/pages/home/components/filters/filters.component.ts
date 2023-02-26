import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports']

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category : string) : void {
    this.showCategory.emit(category);
  }

}
