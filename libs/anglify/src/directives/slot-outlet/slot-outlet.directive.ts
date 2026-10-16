import { Directive, Input, TemplateRef, ViewContainerRef, type EmbeddedViewRef, type OnChanges, type SimpleChange } from '@angular/core';

@Directive({
  selector: '[anglifySlotOutlet]',
  standalone: true,
})
export class SlotOutletDirective implements OnChanges {
  private viewRef: EmbeddedViewRef<any> | null = null;

  @Input() public anglifySlotOutlet: TemplateRef<any> | undefined;

  @Input() public anglifySlotOutletContext: Record<string, unknown> | null = null;

  public constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>
  ) {}

  public ngOnChanges(changes: { anglifySlotOutlet?: SimpleChange; anglifySlotOutletContext?: SimpleChange }) {
    // Only the template requires a new view. The context is read through a proxy, so a new context
    // object is picked up without replacing `EmbeddedViewRef.context`, which Angular deprecated in v21.
    if (!changes.anglifySlotOutlet) return;

    if (this.viewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.viewRef));
    }

    this.viewRef = this.viewContainerRef.createEmbeddedView(this.anglifySlotOutlet ?? this.templateRef, this.createContextForwardProxy());
  }

  private createContextForwardProxy(): Record<string, unknown> {
    return new Proxy(
      {},
      {
        get: (_target, property, receiver) =>
          this.anglifySlotOutletContext ? Reflect.get(this.anglifySlotOutletContext, property, receiver) : undefined,
        set: (_target, property, value) =>
          this.anglifySlotOutletContext ? Reflect.set(this.anglifySlotOutletContext, property, value) : false,
      }
    );
  }
}
