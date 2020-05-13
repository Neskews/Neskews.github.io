import React from 'react';
import { FilterViewer } from "./FilterViewer/FilterViewer";

export const Heading = ({ filterArray }) => {
  return (
    <div className="Heading">
      <FilterViewer filterArray={filterArray} />
    </div>
  );
}