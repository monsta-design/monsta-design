import { ISize } from './size';

export interface NSIResizeEvent {
  host: any;
  handle: any;
  size: ISize;
  position: {
    top: number;
    left: number;
  };
  direction: {
    n: boolean;
    s: boolean;
    w: boolean;
    e: boolean;
  };
}
