import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-confirmation',
  templateUrl: './buttons-confirmation.component.html',
  styleUrls: ['./buttons-confirmation.component.css']
})
export class ButtonsConfirmationComponent {
  needConfirmation = false;
  @Output() confirmationNeeded: EventEmitter<boolean> = new EventEmitter();
  @Output() confirm: EventEmitter<null> = new EventEmitter();
  @Output() cancel: EventEmitter<null> = new EventEmitter();
}
