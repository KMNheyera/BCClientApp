import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() rowCount: number = 0;
  @Input() pageSize: number = 10;
  @Input() name: string = 'Data';

  @Output() pageChanged = new EventEmitter<number>();

  pages: number[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages() {
    this.totalPages = Math.ceil((this.rowCount || 0) / this.pageSize);
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }

  previous() {
    this.goToPage(this.currentPage - 1);
  }
}