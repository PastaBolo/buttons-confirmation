import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-buttons-confirmation',
  templateUrl: './buttons-confirmation.component.html',
  styleUrls: ['./buttons-confirmation.component.css']
})
export class ButtonsConfirmationComponent {
  confirmationNeeded = false
  @Output()
  confirmationAsked: EventEmitter<boolean> = new EventEmitter()
  @Output()
  confirm: EventEmitter<null> = new EventEmitter()
  @Output()
  cancel: EventEmitter<null> = new EventEmitter()

  askConfirmation(asked: boolean): void {
    this.confirmationNeeded = asked
    this.confirmationAsked.emit(this.confirmationNeeded)
  }
}
