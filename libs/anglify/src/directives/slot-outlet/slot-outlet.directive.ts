import { Directive, Input, TemplateRef, ViewContainerRef, type EmbeddedViewRef, type OnChanges, type SimpleChange } from '@angular/core';

@Directive({
  selector: '[anglifySlotOutlet]',
  standalone: true,
})
export class SlotOutletDirective implements OnChanges {
  private viewRef: EmbeddedViewRef<any> | null = null;

  // The last non-null context. Also the backing object, so writes succeed even when no context is given.
  private context: Record<PropertyKey, unknown> = {};

  @Input() public anglifySlotOutlet: TemplateRef<any> | undefined;

  @Input() public anglifySlotOutletContext: Record<string, unknown> | null = null;

  public constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>
  ) {}

  public ngOnChanges(changes: { anglifySlotOutlet?: SimpleChange; anglifySlotOutletContext?: SimpleChange }) {
    // A null context keeps the previous one, so templates don't lose their bindings.
    if (changes.anglifySlotOutletContext && this.anglifySlotOutletContext) {
      this.context = this.anglifySlotOutletContext;
    }

    // Only the template requires a new view. The context is read through a proxy, so a new context
    // object is picked up without replacing `EmbeddedViewRef.context`, which Angular deprecated in v21.
    if (!changes.anglifySlotOutlet) return;

    if (this.viewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.viewRef));
    }

    this.viewRef = this.viewContainerRef.createEmbeddedView(this.anglifySlotOutlet ?? this.templateRef, this.createContextForwardProxy());
  }

  private createContextForwardProxy(): Record<PropertyKey, unknown> {
    // The real context is passed as receiver, so accessors relying on `this` (e.g. private `#fields`) keep working.
    return new Proxy(
      {},
      {
        get: (_target, property) => Reflect.get(this.context, property, this.context),
        set: (_target, property, value) => Reflect.set(this.context, property, value, this.context),
        has: (_target, property) => Reflect.has(this.context, property),
        ownKeys: () => Reflect.ownKeys(this.context),
        getOwnPropertyDescriptor: (_target, property) => {
          const descriptor = Reflect.getOwnPropertyDescriptor(this.context, property);
          // The proxy target is empty, so reporting a non-configurable property would violate the proxy invariants.
          return descriptor && { ...descriptor, configurable: true };
        },
      }
    );
  }
}
