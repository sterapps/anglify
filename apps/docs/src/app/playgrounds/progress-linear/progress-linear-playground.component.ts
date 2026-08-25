import { CheckboxComponent, ProgressLinearComponent as AnglifyProgressLinearComponent, RadioButtonComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [AnglifyProgressLinearComponent, CheckboxComponent, RadioButtonComponent, FormsModule],
  templateUrl: './progress-linear-playground.component.html',
  styleUrls: ['./progress-linear-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLinearPlaygroundComponent {
  protected mode = 'indeterminate';

  protected progress = 60;

  protected buffer = 70;

  protected stream = true;

  protected size = 4;

  @HostBinding('style.--docs-progress-linear-playground-size')
  protected get getSizeInPx() {
    return `${this.size}px`;
  }

  protected get isIndeterminate() {
    return this.mode === 'indeterminate';
  }
}
