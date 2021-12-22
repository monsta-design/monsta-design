import { NSSortableBinding } from './sortable-binding';
import {NSSortableData} from './sortable.directive';

export class NSSortableBindings {

  bindings: NSSortableBinding[];

  constructor(bindingTargets: NSSortableData[]) {
    this.bindings = bindingTargets.map(target => new NSSortableBinding(target));
  }

  injectIntoEvery(index: number, items: any[]) {
    this.bindings.forEach((b, i) => b.insert(index, items[i]));
  }

  getFromEvery(index: number) {
    return this.bindings.map(b => b.get(index));
  }

  extractFromEvery(index: number) {
    return this.bindings.map(b => b.remove(index));
  }

  get provided() {
    return !!this.bindings.length;
  }

}
