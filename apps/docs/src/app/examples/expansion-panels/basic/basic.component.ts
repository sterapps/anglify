import { ExpansionPanelComponent, ExpansionPanelsComponent } from '@anglify/components';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpansionPanelsComponent, ExpansionPanelComponent],
})
export default class BasicComponent {
  protected value = [0];
}
