import { ButtonComponent, ListItemComponent, ListItemTitleComponent, MenuComponent, SlotDirective } from '@anglify/components';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './show-hide-manually.component.html',
  styleUrls: ['./show-hide-manually.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, MenuComponent, SlotDirective, ListItemComponent, ListItemTitleComponent],
})
export default class ShowHideManuallyComponent {
  protected menuVisible = false;
}
