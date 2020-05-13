import React, { useState } from 'react';
import { DropDown } from './DropDown/DropDown';
import "./Filter.scss";

export const Filter = ({
  options,
  label,
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Filter">
      <div
        onClick={() => setIsOpen(!isOpen)}>{label}
      </div>
      <DropDown
        isOpen={isOpen}
        items={options.map(event => ({ label: event}))}
        onSelect={(filter) => {
          setIsOpen(false);
          onSelect(filter)
        }}
      />
    </div>  
  );
}