import { AutocompleteComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { top10MovieNames, top10Movies } from '../../examples';

@Component({
  imports: [AutocompleteComponent],
  templateUrl: './access-value.component.html',
  styleUrls: ['./access-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccessValueComponent {
  protected top10Movies = top10Movies;

  protected selection1 = ['1010', '1004'];

  protected top10MovieNames = top10MovieNames;

  protected selection2 = ['The Godfather'];
}
