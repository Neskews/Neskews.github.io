import React from 'react';
import { Small } from "../../../../../Components/Headline/Small/Small";
import { Bands } from "../../../Bands/Bands";

export const SmartView = ({ bands }) => (
  <section>
    <Small label="Smart View"></Small>
    <Bands bands={bands} />
  </section>
);