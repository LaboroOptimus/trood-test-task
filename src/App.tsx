import React from "react";
import { LegendProps, ItemProps, ProgressProps } from "./types";
import { legend, data } from "./data";
import { calculateTotalByType, calculateTotal } from "./utils";

import "./App.css";

const Item: React.FC<ItemProps> = ({ color, height, width }) => (
  <div
    className="progress-item"
    style={{
      backgroundColor: color,
      height: `${height}px`,
      width: `${width}px`,
    }}
  />
);

const Legend: React.FC<LegendProps> = ({ color, name, count, percent }) => (
  <div className="progress-legend-item">
    <span className="legend-circle" style={{ backgroundColor: color }} />
    <span className="legend-title">{`${name}:${count} (${percent.toFixed(
      2
    )}%)`}</span>
  </div>
);

const ProgressBar: React.FC<ProgressProps> = ({ height, width, items }) => (
  <div className="wrapper">
    <div className="progress">
      {items
        .sort((a, b) => (a.name > b.name ? -1 : 1))
        .map((item) => {
          return (
            !!item.value && (
              <Item color={item.color} height={height} width={width} />
            )
          );
        })}
    </div>
    <div className="legend">
      {legend.map((item) => {
        return (
          <Legend
            color={item.color}
            name={item.name}
            count={calculateTotalByType(item.name, items)}
            percent={
              calculateTotalByType(item.name, items) /
              (calculateTotal(items) / 100)
            }
          />
        );
      })}
    </div>
  </div>
);

function App() {
  // eslint-disable-next-line no-lone-blocks
  {
    /* In my opinion it's unnessecary to put height and width props through ProgressBar component (because values are constant). 
       But if we want to use this component in several projects's part - it would be great idea */
  }
  return <ProgressBar height={30} width={10} items={data} />;
}

export default App;
