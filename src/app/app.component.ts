import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quantity: number = 5

  onConfirmationAsked(confirmationAsked): void {
    console.log('confirmationAsked : ' + confirmationAsked)
  }
  onConfirm(): void {
    console.log('onConfirm')
  }
  onCancel(): void {
    console.log('onCancel')
  }
}
