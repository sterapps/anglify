import { InputDirective, TextFieldComponent } from '@anglify/components';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './native-input-validation.component.html',
  styleUrls: ['./native-input-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextFieldComponent, InputDirective],
})
export default class NativeInputValidationComponent {}
