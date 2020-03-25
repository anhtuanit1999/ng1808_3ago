import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterStatus } from '../model/FilterStatus';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})
export class WordFilterComponent{
  @Output() OnChangeStatus = new EventEmitter<FilterStatus>();
  @Input() filterStatus: FilterStatus;
  changeStatus(filterStatus: FilterStatus) {
    this.OnChangeStatus.emit(filterStatus);
  }
}
