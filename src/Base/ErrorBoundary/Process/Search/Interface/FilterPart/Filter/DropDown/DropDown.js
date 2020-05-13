import React from 'react';
import { DropDownItem } from './DropDownItem/DropDownItem';
import clsx from "clsx";
import "./DropDown.scss";

export const DropDown = ({ items, isOpen, onSelect }) => {
  return (
    <div className={clsx("DropDown", { isOpen })}>
      {isOpen && (
        <>
          {items.map((item) => (
            <DropDownItem
              item={item}
              key={item.label}
              onSelect={onSelect}
            />
          ))}
        </>
      )}
    </div>
  );
}