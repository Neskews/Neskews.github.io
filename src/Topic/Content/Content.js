import React from 'react';
import { Locations } from "./Locations/Locations";
import "./Content.scss";

export const Content = ({ content: { type, values } }) => {
  if (type === "list") {
    return (
      <div className="Content">
        {values.map(value => (
          <div className="Item" key={value}>{value}</div>
        ))}
      </div>
    )
  }

  if (type === "locations") {
    return <Locations locations={values} />;
  }

  return <div className="Content"></div>;
}