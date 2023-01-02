import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: 'card.component.html'
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() index!: number;
  @Output() buttonClick = new EventEmitter<number>();

  deleteCard(): void {
    this.buttonClick.emit(this.index);
  }

}
