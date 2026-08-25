import { ChipComponent, IconComponent, SlotDirective } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChipComponent, IconComponent, SlotDirective],
})
export default class SlotsComponent {}
