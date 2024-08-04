import { Component, Input, SimpleChanges } from '@angular/core';
import { Activity } from '../../../core/interfaces/activity';
import { NgClass, NgFor } from '@angular/common';
import { Timeframe } from '../../../core/interfaces/timeframe';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './ticket-card.component.html',
})
export class TicketCardComponent {

  /**
   * The activity to display.
   */
  @Input() activity!: Activity;

  /**
   * The selected timeframe to display data for.
   */
  @Input() timeframe!: Timeframe;

  current!: number;
  previous!: number;
  previousLabel!: string;

  /**
   * Updates the displayed data when the timeframe changes.
   * @param changes - The changes detected.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeframe'] || changes['activity']) {
      this.updateTimeframe();
    }
  }

  /**
   * Updates the current and previous hours based on the selected timeframe.
   */
  private updateTimeframe() {
    const timeframeData = this.activity.timeframes[this.timeframe as keyof typeof this.activity.timeframes];
    this.current = timeframeData.current;
    this.previous = timeframeData.previous;

    switch (this.timeframe) {
      case 'daily':
        this.previousLabel = 'Yesterday';
        break;
      case 'weekly':
        this.previousLabel = 'Last Week';
        break;
      case 'monthly':
        this.previousLabel = 'Last Month';
        break;
    }
  }
}
