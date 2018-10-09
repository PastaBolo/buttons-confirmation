import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  @Input()
  quantity: number
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>()

  addOne(): void {
    this.quantityChange.emit(++this.quantity)
  }
}
