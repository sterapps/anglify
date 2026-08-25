import { BadgeComponent, ButtonComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, ButtonComponent],
})
export default class PositionComponent {}
