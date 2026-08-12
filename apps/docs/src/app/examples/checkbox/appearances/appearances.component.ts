import { CheckboxComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './appearances.component.html',
  styleUrls: ['./appearances.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckboxComponent],
})
export default class AppearancesComponent {}
