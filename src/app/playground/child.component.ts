import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child  ',
  template: `
    <div>
        <button class="btn btn-danger" (click)="addChild()">Add in child</button>
        <button class="btn btn-danger" (click)="subChild()">Add in child</button>
    </div>
  `,
})
export class ChildComponent {
  @Output() myClick = new EventEmitter<any>();
  addChild() {
      this.myClick.emit(true);
  }
  subChild() {
    this.myClick.emit(false);
}
}
