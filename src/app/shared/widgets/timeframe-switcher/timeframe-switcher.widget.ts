import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Timeframe } from '../../../core/interfaces/timeframe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'timeframe-switcher-widget',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timeframe-switcher.widget.html',
})
export class TimeframeSwitcherComponent {

  /**
   * Event emitter for the selected timeframe.
   */
  @Output() timeframeChange = new EventEmitter<Timeframe>();

  /**
   * Currently selected timeframe.
   */
  @Input() selectedTimeframe!: Timeframe;

  /**
   * Sets the selected timeframe and emits the change event.
   * @param timeframe - The timeframe to set.
   */
  setTimeframe(timeframe: Timeframe) {
    this.timeframeChange.emit(timeframe);
  }
}
