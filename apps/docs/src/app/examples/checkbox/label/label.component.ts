import { CheckboxComponent, ClickStopPropagationDirective } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CheckboxComponent, ClickStopPropagationDirective, RouterModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelComponent {}
