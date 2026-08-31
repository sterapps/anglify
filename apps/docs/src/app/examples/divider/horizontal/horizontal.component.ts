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
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HorizontalComponent {}
