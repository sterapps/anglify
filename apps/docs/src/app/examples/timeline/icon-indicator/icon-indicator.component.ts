import { IconComponent, SlotDirective, TimelineComponent, TimelineItemComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './icon-indicator.component.html',
  styleUrls: ['./icon-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimelineComponent, TimelineItemComponent, IconComponent, SlotDirective],
})
export default class IconIndicatorComponent {}
