export interface ISize {
  width: number;
  height: number;
}

export class NSSize implements ISize {
  constructor(public width: number, public height: number) { }

  static getCurrent(el: Element) {
    let size = new NSSize(0, 0);

    if (window) {
      const computed = window.getComputedStyle(el);
      if (computed) {
        size.width = parseInt(computed.getPropertyValue('width'), 10);
        size.height = parseInt(computed.getPropertyValue('height'), 10);
      }
      return size;
    } else {
      console.error('Not Supported!');
      return null;
    }
  }

  static copy(s: NSSize) {
    return new NSSize(0, 0).set(s);
  }

  set(s: ISize) {
    this.width = s.width;
    this.height = s.height;
    return this;
  }
}
