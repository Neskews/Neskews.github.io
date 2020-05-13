import React from 'react';
import { Band } from './Band/Band';
import { Heading } from "./Heading/Connector";

export const Bands = ({ bands }) => {
  return (
    <div>
      <Heading />
      {Object.values(bands).map(band => (
        <Band band={band} key={band.name} />
      ))}
    </div>
  );
}