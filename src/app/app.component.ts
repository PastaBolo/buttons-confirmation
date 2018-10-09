import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onConfirmationNeeded(e): void { console.log(e); }
  onConfirm(): void { console.log('onConfirm'); }
  onCancel(): void { console.log('onCancel'); }
}
