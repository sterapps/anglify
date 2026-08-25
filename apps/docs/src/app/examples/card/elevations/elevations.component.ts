import { CardComponent } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './elevations.component.html',
  styleUrls: ['./elevations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
})
export default class ElevationsComponent {}
