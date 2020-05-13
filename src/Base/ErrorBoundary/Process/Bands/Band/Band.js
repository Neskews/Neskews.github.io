import React from 'react';
import { Price } from "./Price/Price";
import { Name } from "./Name/Name";
import { Tags } from "./Tags/Tags";
import { Interact } from "./Interact/Connector";
import "./Band.scss";

export const Band = ({
  band: {
    name,
    price,
    events,
    kinds
  }
}) => {
  const tags = [...events, ...kinds];
  return (
    <div className="Band">
      <Name name={name} />
      <Tags tags={tags} />
      <Price price={price} />
      <Interact bandName={name} />
    </div>
  );
}