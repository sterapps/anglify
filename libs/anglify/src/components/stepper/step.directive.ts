import { Directive, Input, Output, TemplateRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { StepperService } from './stepper.service';

@UntilDestroy()
@Directive({
  selector: 'ng-template[anglifyStep]',
  standalone: true,
})
export class StepDirective {
  private readonly _isFirstStep$ = new BehaviorSubject<boolean>(false);

  // eslint-disable-next-line rxjs/no-sharereplay
  public readonly isFirstStep$ = this._isFirstStep$.asObservable().pipe(shareReplay(1));

  private readonly _isLastStep$ = new BehaviorSubject<boolean>(false);

  public readonly isLastStep$ = this._isLastStep$.asObservable();

  private readonly _label$ = new BehaviorSubject<string>('');

  // eslint-disable-next-line rxjs/no-sharereplay
  public readonly label$ = this._label$.asObservable().pipe(shareReplay(1));

  private readonly _visited$ = new BehaviorSubject(false);

  // eslint-disable-next-line rxjs/no-sharereplay
  public readonly visited$ = this._visited$.asObservable().pipe(shareReplay(1));

  private readonly _valid$ = new BehaviorSubject(true);

  // eslint-disable-next-line rxjs/no-sharereplay
  public readonly valid$ = this._valid$.asObservable().pipe(shareReplay(1));

  private readonly _index$ = new BehaviorSubject<number>(-1);

  public readonly index$ = this._index$.asObservable();

  private readonly _stepper$ = new BehaviorSubject<StepperService | null>(null);

  public readonly selected$ = this._stepper$.pipe(
    switchMap(stepper => {
      if (!stepper) return of(false);
      return combineLatest([stepper.selectedIndex$, this._index$]).pipe(
        map(([selectedIndex, currentStepIndex]) => selectedIndex === currentStepIndex),
        tap(isSelected => {
          if (isSelected && !this.getVisitedSnapshot()) {
            this.setVisited(true);
          }
        })
      );
    }),
    // eslint-disable-next-line rxjs/no-sharereplay
    shareReplay(1)
  );

  /**
   * Sets the Step label.
   */
  @Input() public set label(label: string) {
    this._label$.next(label);
  }

  /**
   * Condition for the step to be valid and to be able to navigate to the next step.
   */
  @Input() public set valid(valid: boolean) {
    this._valid$.next(valid);
  }

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public readonly onSelectedChange$ = this.selected$;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public readonly onValidChange$ = this.valid$;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public readonly onVisitedChange$ = this.visited$;

  public constructor(public template: TemplateRef<any>) {
    this.selected$.pipe(untilDestroyed(this)).subscribe();
  }

  /**
   * Called by StepperComponent after content init to wire up the correct service instance.
   * This avoids DI issues with content children in Angular 16 standalone components.
   */
  public connectStepper(stepper: StepperService): void {
    this._stepper$.next(stepper);
  }

  public setLabel(label: string) {
    this._label$.next(label);
  }

  public getLabelSnapshot() {
    return this._label$.value;
  }

  public setVisited(visited: boolean) {
    this._visited$.next(visited);
  }

  public getVisitedSnapshot() {
    return this._visited$.value;
  }

  public setIsFirstStep(value: boolean) {
    this._isFirstStep$.next(value);
  }

  public setISLastStep(value: boolean) {
    this._isLastStep$.next(value);
  }

  public setIndex(index: number) {
    this._index$.next(index);
  }

  public getIndexSnapshot() {
    return this._index$.value;
  }

  public setValid(valid: boolean) {
    this._valid$.next(valid);
  }

  public getValidSnapshot() {
    return this._valid$.value;
  }
}
