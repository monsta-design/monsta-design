export interface ResizeHandleStyle {
  'n'?: string;
  's'?: string;
  'e'?: string;
  'w'?: string;
  'ne'?: string;
  'nw'?: string;
  'se'?: string;
  'sw'?: string;
}

// export type NSResizeHandleType = string|ResizeHandleStyle;
export type NSResizeHandleType = 's' | 'e' | 't' | 'b' | 'ts' | 'te' | 'bs' | 'be' | string;
