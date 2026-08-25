import { ButtonComponent, StepDirective, StepperComponent, StepperNextDirective, StepperPreviousDirective } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent, StepDirective, ButtonComponent, StepperPreviousDirective, StepperNextDirective],
})
export default class HorizontalStepperComponent {}
