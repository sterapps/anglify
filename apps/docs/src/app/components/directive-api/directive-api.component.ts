import { SimpleTableComponent } from '@anglify/components';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ModifierType, type DirectiveDocumentation } from '../../app.interface';

@Component({
  selector: 'app-directive-api',
  templateUrl: './directive-api.component.html',
  styleUrls: ['./directive-api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SimpleTableComponent, AsyncPipe],
})
export class DirectiveAPIComponent {
  public get documentation() {
    return this.documentation$.value;
  }

  @Input() public set documentation(documentation: DirectiveDocumentation | undefined) {
    this.documentation$.next(documentation);
  }

  private readonly documentation$ = new BehaviorSubject<DirectiveDocumentation | undefined>(undefined);

  public publicMethods$ = this.documentation$.pipe(
    map(documentation => {
      if (!documentation?.methodsClass) return;
      const methods = documentation.methodsClass.filter(method => method.modifierKind.includes(ModifierType.Public));
      if (methods.length === 0) return undefined;
      return methods;
    })
  );
}
