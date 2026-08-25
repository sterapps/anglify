import {
  CardComponent,
  IconComponent,
  ListComponent,
  ListItemComponent,
  ListItemTitleComponent,
  NavigationDrawerComponent,
  SlotDirective,
} from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './standard-drawer.component.html',
  styleUrls: ['./standard-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    NavigationDrawerComponent,
    ListComponent,
    ListItemComponent,
    ListItemTitleComponent,
    IconComponent,
    SlotDirective,
  ],
})
export default class StandardDrawerComponent {}
