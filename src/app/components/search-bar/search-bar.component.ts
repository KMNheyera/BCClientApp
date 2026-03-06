import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() placeholder: string = "Search";
  @Output() search = new EventEmitter<string>();

  searchText: string = "";

  onSearch() {
    this.search.emit(this.searchText.trim());
  }
}


