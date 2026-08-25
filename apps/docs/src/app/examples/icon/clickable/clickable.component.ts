import { IconComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export default class ClickableComponent {}
