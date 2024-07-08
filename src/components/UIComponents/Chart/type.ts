export type Bar = {
  columnWidth: string;
};

export type PlotOptions = {
  bar: Bar;
};

export type Fill = {
  type: string[];
};

export type Xaxis = {
  type: string;
};

export type Y = {
  formatter: (value: number) => void;
};

export type Tooltip = {
  shared: boolean;
  intersect: boolean;
  y: Y;
};

export type ChartOptions = {
  plotOptions: PlotOptions;
  fill: Fill;
  labels: string[];
  xaxis: Xaxis;
  tooltip: Tooltip;
};
