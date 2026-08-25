import { ButtonComponent, ComboboxComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { top10Movies } from '../../examples';

@Component({
  imports: [ComboboxComponent, ButtonComponent],
  templateUrl: './control-values-manually.component.html',
  styleUrls: ['./control-values-manually.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlValuesManuallyComponent {
  protected top10Movies = top10Movies;

  protected selection = ['1010', '1004'];

  protected toggleFightClub() {
    if (this.selection.includes('1010')) {
      this.selection = this.selection.filter(id => id !== '1010');
    } else {
      this.selection = [...this.selection, '1010'];
    }
  }
}
