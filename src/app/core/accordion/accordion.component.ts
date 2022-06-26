import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  /**
   * Accordion title
   */
  @Input()
  title: string;
  
  /**
   * Accordion description
   */
  @Input()
  description: string;
  
  /**
   * Accordion panel description another text
   */
  @Input()
  panelText: string;
}
