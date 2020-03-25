import { Component } from '@angular/core';
import { Word } from '../model/Word';
import { FilterStatus } from '../model/FilterStatus';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {
  FilterStatus = FilterStatus.ShowAll;
  words: Word[] = [
    { en: 'hello', vn: 'xin chao', isMemorized: true },
    { en: 'space', vn: 'khoang cach', isMemorized: true },
    { en: 'line', vn: 'dong', isMemorized: false },
  ];
  removeByEn(en) {
    const index = this.words.findIndex(word => word.en === en);
    this.words.splice(index, 1);
  }
  onAddNewWord(wordObj: Word) {
    const { en, vn } = wordObj;
    this.words.push({ en, vn });
  }
  changeFilterStatus(filterValue) {
    this.FilterStatus = filterValue;
  }
}
