import { AutocompleteComponent, ChipComponent, SlotDirective } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { top10Movies } from '../../examples';

@Component({
  imports: [AutocompleteComponent, SlotDirective, ChipComponent],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChipsComponent {
  protected top10Movies = top10Movies;
}
