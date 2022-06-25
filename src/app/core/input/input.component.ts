import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  /**
   * Input placeholder
   */
  @Input()
  placeholder: string;

  /**
   * Input model
   */
  @Input()
  inputModel: Event;

  /**
   * Model change value emitter
   */
  @Output()
  modelChanged: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * Emit value on input change
   * @param event
   */
  onInputModelChange(event: Event): void {
    this.modelChanged.emit(this.inputModel);
  }
}
