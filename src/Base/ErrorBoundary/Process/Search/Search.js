import React from 'react';
import { FilterPart } from './Interface/FilterPart/Connector';
import { Capture } from "../../../Components/Headline/Capture/Capture";
import { SmartView } from "./Interface/SmartView/Connector";

export const Search = () => (
  <div className="Interface">
    <Capture capture="Buche Deinen Musiker" />
    <FilterPart />
    <SmartView />
  </div>
);