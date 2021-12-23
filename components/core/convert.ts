import {coerceBooleanProperty, coerceCssPixelValue} from "@angular/cdk/coercion";

export function toCssPixel(value: string | number): string {
  return coerceCssPixelValue(value)
}

export function toBoolean(value: boolean | string):boolean {
  return coerceBooleanProperty(value)
}

export function propDecoratorFactory<T, D>(name: string, fallback: (v:T) => D): (target:any, propName:string) => void {
  function propDecorator (target:any, propName: string, originalDescriptor?:TypedPropertyDescriptor<any>): any {
    const privatePropName = `$$__${propName}`
    // 判断当前class上是否已经存在该自定义属性
    if(Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      throw new Error(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      writable: true,
      configurable: true
    })

    return {
      get(): string {
        return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName]
      },
      set(value:T): void {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value))
        }
        this[privatePropName] = fallback(value)
      }
    }
  }
  return propDecorator
}

export function InputBoolean(): any {
  return propDecoratorFactory('InputBoolean', toBoolean)
}
