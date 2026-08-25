import { BottomNavigationComponent, BottomNavigationItemComponent, IconComponent, SlotDirective } from '@anglify/components';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BottomNavigationComponent, BottomNavigationItemComponent, IconComponent, SlotDirective],
})
export default class ShiftComponent {
  protected value = 1;
}
