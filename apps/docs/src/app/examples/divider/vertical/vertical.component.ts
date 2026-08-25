import { ButtonComponent, DividerComponent, IconComponent, SlotDirective, ToolbarComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [DividerComponent, ToolbarComponent, IconComponent, ButtonComponent, SlotDirective],
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerticalComponent {}
