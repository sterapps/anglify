import { ChangeDetectionStrategy, Component, signal, TemplateRef, viewChild, type EmbeddedViewRef } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { SlotOutletDirective } from './slot-outlet.directive';

class PrivateFieldContext {
  readonly #value = 'private';

  public get value() {
    return this.#value;
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SlotOutletDirective],
  template: `
    <ng-template #slotA let-label let-active="active">
      <span class="slot-a">{{ label }}|{{ active }}</span>
    </ng-template>
    <ng-template #slotB let-label
      ><span class="slot-b">{{ label }}</span></ng-template
    >
    <ng-container *anglifySlotOutlet="slot(); context: context()"><span class="fallback">fallback</span></ng-container>
  `,
})
class HostComponent {
  public readonly slotA = viewChild.required<TemplateRef<unknown>>('slotA');

  public readonly slotB = viewChild.required<TemplateRef<unknown>>('slotB');

  public readonly outlet = viewChild.required(SlotOutletDirective);

  public readonly slot = signal<TemplateRef<unknown> | undefined>(undefined);

  public readonly context = signal<Record<string, unknown> | null>(null);
}

describe('SlotOutletDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  const query = (selector: string): HTMLElement | null => fixture.nativeElement.querySelector(selector);
  const viewContext = (): Record<PropertyKey, unknown> =>
    // @ts-expect-error: Accessing private view for test purposes
    (host.outlet().viewRef as EmbeddedViewRef<Record<PropertyKey, unknown>>).context;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the fallback template when no slot is given', () => {
    expect(query('.fallback')?.textContent).toBe('fallback');
  });

  it('should render the slot template with its context', () => {
    host.slot.set(host.slotA());
    host.context.set({ $implicit: 'first', active: true });
    fixture.detectChanges();

    expect(query('.fallback')).toBeNull();
    expect(query('.slot-a')?.textContent).toBe('first|true');
  });

  it('should pick up a new context object without recreating the view', () => {
    host.slot.set(host.slotA());
    host.context.set({ $implicit: 'first', active: true });
    fixture.detectChanges();
    const element = query('.slot-a');

    host.context.set({ $implicit: 'second', active: false });
    fixture.detectChanges();

    expect(query('.slot-a')).toBe(element);
    expect(element?.textContent).toBe('second|false');
  });

  it('should keep the previous context when the context becomes null', () => {
    host.slot.set(host.slotA());
    host.context.set({ $implicit: 'first', active: true });
    fixture.detectChanges();

    host.context.set(null);
    fixture.detectChanges();

    expect(query('.slot-a')?.textContent).toBe('first|true');
  });

  it('should recreate the view when the template changes', () => {
    host.slot.set(host.slotA());
    host.context.set({ $implicit: 'label' });
    fixture.detectChanges();

    host.slot.set(host.slotB());
    fixture.detectChanges();

    expect(query('.slot-a')).toBeNull();
    expect(query('.slot-b')?.textContent).toBe('label');

    host.slot.set(undefined);
    fixture.detectChanges();

    expect(query('.slot-b')).toBeNull();
    expect(query('.fallback')).not.toBeNull();
  });

  it('should allow writing to the context when no context is given', () => {
    const context = viewContext();

    expect(() => (context.foo = 'bar')).not.toThrow();
    expect(context.foo).toBe('bar');
  });

  it('should forward writes to the given context', () => {
    const given: Record<string, unknown> = { $implicit: 'label' };
    host.context.set(given);
    fixture.detectChanges();

    viewContext().foo = 'bar';

    expect(given.foo).toBe('bar');
  });

  it('should expose the context to enumeration and `in` checks', () => {
    host.context.set(Object.freeze({ $implicit: 'label', active: true }));
    fixture.detectChanges();
    const context = viewContext();

    expect(Object.keys(context)).toEqual(['$implicit', 'active']);
    expect('active' in context).toBe(true);
    expect({ ...context }).toEqual({ $implicit: 'label', active: true });
  });

  it('should support accessors using private fields', () => {
    host.context.set(new PrivateFieldContext() as unknown as Record<string, unknown>);
    fixture.detectChanges();

    expect(viewContext().value).toBe('private');
  });
});
