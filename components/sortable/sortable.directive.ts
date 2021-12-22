import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2,
  SimpleChange,
} from '@angular/core';
import Sortable, {NSSortableOptions} from 'sortablejs';
import {GLOBALS} from './globals';
import {NSSortableBindings} from './sortable-bindings';
import {NSSortableService} from './sortable.service';

export type NSSortableData = any | any[];

const getIndexesFromEvent = (event: SortableEvent) => {
  if (event.hasOwnProperty('newDraggableIndex') && event.hasOwnProperty('oldDraggableIndex')) {
    return {
      new: event.newDraggableIndex,
      old: event.oldDraggableIndex,
    };
  } else {
    return {
      new: event.newIndex,
      old: event.oldIndex,
    };
  }
};

@Directive({
  selector: '[nsSortable]',
})
export class NSSortableDirective implements OnInit, OnChanges, OnDestroy {

  @Input() nsSortable: NSSortableData; // array or a FormArray

  @Input() nsSortableContainer: string;

  @Input() nsSortableOptions: NSSortableOptions;

  @Input() nsSortableCloneFunction: (item: any) => any;

  private sortableInstance: any;

  @Output() nsOnInit = new EventEmitter();

  constructor(
    @Optional() @Inject(GLOBALS) private globalConfig: NSSortableOptions,
    private service: NSSortableService,
    private element: ElementRef,
    private zone: NgZone,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    if (Sortable && Sortable.create) { // Sortable does not exist in angular universal (SSR)
      this.create();
    }
  }

  ngOnChanges(changes: { [prop in keyof NSSortableDirective]: SimpleChange }) {
    const optionsChange: SimpleChange = changes.nsSortableOptions;

    if (optionsChange && !optionsChange.isFirstChange()) {
      const previousOptions: NSSortableOptions = optionsChange.previousValue;
      const currentOptions: NSSortableOptions = optionsChange.currentValue;

      Object.keys(currentOptions).forEach(optionName => {
        if (currentOptions[optionName] !== previousOptions[optionName]) {
          // use low-level option setter
          this.sortableInstance.option(optionName, this.options[optionName]);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.sortableInstance) {
      this.sortableInstance.destroy();
    }
  }

  private create() {
    const container = this.nsSortableContainer ? this.element.nativeElement.querySelector(this.nsSortableContainer) : this.element.nativeElement;

    setTimeout(() => {
      this.sortableInstance = Sortable.create(container, this.options);
      this.nsOnInit.emit(this.sortableInstance);
    }, 0);
  }

  private getBindings(): NSSortableBindings {
    if (!this.nsSortable) {
      return new NSSortableBindings([]);
    } else if (this.nsSortable instanceof NSSortableBindings) {
      return this.nsSortable;
    } else {
      return new NSSortableBindings([this.nsSortable]);
    }
  }

  private get options() {
    return {...this.optionsWithoutEvents, ...this.overridenOptions};
  }

  private get optionsWithoutEvents() {
    return {...(this.globalConfig || {}), ...(this.nsSortableOptions || {})};
  }

  private proxyEvent(eventName: string, ...params: any[]) {
    this.zone.run(() => { // re-entering zone, see https://github.com/SortableJS/angular-sortablejs/issues/110#issuecomment-408874600
      if (this.optionsWithoutEvents && this.optionsWithoutEvents[eventName]) {
        this.optionsWithoutEvents[eventName](...params);
      }
    });
  }

  private get isCloning() {
    return this.sortableInstance.options.group.checkPull(this.sortableInstance, this.sortableInstance) === 'clone';
  }

  private clone<T>(item: T): T {
    // by default pass the item through, no cloning performed
    return (this.nsSortableCloneFunction || (subitem => subitem))(item);
  }

  private get overridenOptions(): NSSortableOptions {
    // always intercept standard events but act only in case items are set (bindingEnabled)
    // allows to forget about tracking this.items changes
    return {
      onAdd: (event: SortableEvent) => {
        this.service.transfer = (items: any[]) => {
          this.getBindings().injectIntoEvery(event.newIndex, items);
          this.proxyEvent('onAdd', event);
        };

        this.proxyEvent('onAddOriginal', event);
      },
      onRemove: (event: SortableEvent) => {
        const bindings = this.getBindings();

        if (bindings.provided) {
          if (this.isCloning) {
            this.service.transfer(bindings.getFromEvery(event.oldIndex).map(item => this.clone(item)));

            // great thanks to https://github.com/tauu
            // event.item is the original item from the source list which is moved to the target list
            // event.clone is a clone of the original item and will be added to source list
            // If bindings are provided, adding the item dom element to the target list causes artifacts
            // as it interferes with the rendering performed by the angular template.
            // Therefore we remove it immediately and also move the original item back to the source list.
            // (event handler may be attached to the original item and not its clone, therefore keeping
            // the original dom node, circumvents side effects )
            this.renderer.removeChild(event.item.parentNode, event.item);
            this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone);
            this.renderer.removeChild(event.clone.parentNode, event.clone);
          } else {
            this.service.transfer(bindings.extractFromEvery(event.oldIndex));
          }

          this.service.transfer = null;
        }

        this.proxyEvent('onRemove', event);
      },
      onUpdate: (event: SortableEvent) => {
        const bindings = this.getBindings();
        const indexes = getIndexesFromEvent(event);

        bindings.injectIntoEvery(indexes.new, bindings.extractFromEvery(indexes.old));
        this.proxyEvent('onUpdate', event);
      },
    };
  }

}

interface SortableEvent {
  oldIndex: number;
  newIndex: number;
  oldDraggableIndex?: number;
  newDraggableIndex?: number;
  item: HTMLElement;
  clone: HTMLElement;
}
