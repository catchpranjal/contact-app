import React from "react";
import ChartItem from "./ChartItem";
import Maps from "./Maps";

const ChartMaps: React.FC = () => {
  return (
    <div>
      <div className="mt-7">
        <ChartItem />
      </div>
      <div className="mt-7">
        <Maps />
      </div>
    </div>
  );
};

export default ChartMaps;
