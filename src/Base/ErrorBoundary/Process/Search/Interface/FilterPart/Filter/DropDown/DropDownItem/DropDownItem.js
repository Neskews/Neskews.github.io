import React from 'react';
import "./DropDownItem.scss";

export const DropDownItem = ({ item: { label }, onSelect }) => {
  const onClick = () => onSelect(label);

  return (
    <div
      className="DropDownItem"
      onClick={onClick}
    >
      {label}
    </div>
  );
}