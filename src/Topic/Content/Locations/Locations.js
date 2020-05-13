import React from 'react';
import { Location } from "./Location/Location";

export const Locations = ({ locations }) => {
  return (
    <div>
      {locations.map((location, key) => (
        <Location location={location} key={key} />
      ))}
    </div>
  )
}