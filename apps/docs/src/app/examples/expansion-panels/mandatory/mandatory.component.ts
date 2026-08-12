import { ExpansionPanelComponent, ExpansionPanelsComponent } from '@anglify/components';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './mandatory.component.html',
  styleUrls: ['./mandatory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpansionPanelsComponent, ExpansionPanelComponent],
})
export default class MandatoryComponent {
  protected value = [0];
}
