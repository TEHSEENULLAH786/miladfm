import { Component, OnInit } from '@angular/core';
import { TimeframeService } from '../../core/services/timeframe.service';
import { NgClass, NgFor } from '@angular/common';
import { Activity } from '../../core/interfaces/activity';
import { TicketCardComponent } from "../../shared/components/ticket-card/ticket-card.component";
import { TimeframeSwitcherComponent } from "../../shared/widgets/timeframe-switcher/timeframe-switcher.widget";
import { Timeframe } from '../../core/interfaces/timeframe';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [NgFor, NgClass, TicketCardComponent, TimeframeSwitcherComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  /**
   * Array of activities to display.
   */
  activities: Activity[] = [];

  /**
   * Currently selected timeframe.
   */
  selectedTimeframe: Timeframe = 'weekly';

  constructor(private timeframeService: TimeframeService) {}

  /**
   * Initializes the component and loads the activities.
   */
  ngOnInit(): void {
    this.activities = this.timeframeService.getTimeframes();
  }

  /**
   * Updates the selected timeframe.
   * @param timeframe - The new timeframe to set.
   */
  onTimeframeChange(timeframe: Timeframe) {
    this.selectedTimeframe = timeframe;
  }
}
