import React from 'react';
import { Content } from './Content/Content';
import "./Topic.scss";
import { Name } from "./Name/Name";

export const Topic = ({ data: { name, content } }) => {
  return (
    <div className="Topic">
      <Name name={name} />
      <Content content={content} />
    </div>
  );
}