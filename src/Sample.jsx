import React, { useRef, useState } from "react";
import "./index.css";

import { IgrTreemapModule } from "igniteui-react-charts";
import { IgrTreemap } from "igniteui-react-charts";

import { CountyHierarchicalData } from "./CountyHierarchicalData";

import { defineAllComponents } from "igniteui-webcomponents";

defineAllComponents();

IgrTreemapModule.register();

const Sample = () => {
  const treemapRef = useRef(null);

  const [countyHierarchicalData, setCountyHierarchicalData] = useState(
    new CountyHierarchicalData()
  );

  return (
    <div className="container sample">
      <div className="legend-title">Comparing Population of Countries</div>
      {console.log(countyHierarchicalData, "<<<countyHierarchicalData>>>")}
      <div className="container fill">
        <IgrTreemap
          ref={treemapRef}
          dataSource={countyHierarchicalData}
          rootTitle="Countries"
          parentIdMemberPath="parent"
          idMemberPath="name"
          labelMemberPath="name"
          valueMemberPath="population"
          fillBrushes="rgba(41, 158, 65, 1) rgba(78, 98, 207, 1) rgba(94, 53, 156, 1)"
          isFillScaleLogarithmic={true}
          headerDisplayMode="Overlay"
          parentNodeBottomPadding={0}
          parentNodeLeftPadding={0}
          parentNodeRightPadding={0}
          parentNodeTopPadding={0}
        />
      </div>
    </div>
  );
};

export default Sample;
