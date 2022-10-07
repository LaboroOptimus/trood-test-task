export interface ItemProps {
  color?: string;
  height: number;
  width: number;
}

export interface ProgressProps {
  height: number;
  width: number;
  items: Array<Bar>;
}

export interface Bar {
  name: string;
  color: string;
  value: number;
}

export interface LegendProps {
  color: string;
  name: string;
  count: number;
  percent: number;
}
