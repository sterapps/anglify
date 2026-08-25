import { CheckboxComponent, DividerComponent } from '@anglify/components';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, CheckboxComponent, FormsModule, DividerComponent],
  templateUrl: './divider-playground.component.html',
  styleUrls: ['./divider-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerPlaygroundComponent {
  protected vertical = false;

  protected inset = false;
}
