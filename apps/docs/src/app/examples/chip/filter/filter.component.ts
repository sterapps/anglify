import { ChipComponent, IconComponent, ItemGroupComponent, SlotDirective } from '@anglify/components';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChipComponent, IconComponent, ItemGroupComponent, SlotDirective],
})
export default class FilterComponent {}
