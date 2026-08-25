import { InputDirective, TextFieldComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextFieldComponent, InputDirective],
})
export default class CounterComponent {}
