import { ProgressLinearComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProgressLinearComponent],
})
export default class RegularComponent {}
