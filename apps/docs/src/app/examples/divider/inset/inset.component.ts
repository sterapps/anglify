import {
  DividerComponent,
  IconComponent,
  ListComponent,
  ListItemComponent,
  ListItemGroupComponent,
  ListItemTitleComponent,
  SlotDirective,
} from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [
    DividerComponent,
    IconComponent,
    ListComponent,
    ListItemComponent,
    ListItemGroupComponent,
    ListItemTitleComponent,
    SlotDirective,
  ],
  templateUrl: './inset.component.html',
  styleUrls: ['./inset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsetComponent {}
