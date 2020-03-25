import { Component, Output, EventEmitter } from '@angular/core';
import { Word } from '../model/Word';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent {
  txtEn = '';
  txtVn = '';
  @Output() onAddNewWord = new EventEmitter<Word>();
  addWord() {
    const wordObj = { en: this.txtEn, vn: this.txtVn };
    this.onAddNewWord.emit(wordObj);
  }

}
