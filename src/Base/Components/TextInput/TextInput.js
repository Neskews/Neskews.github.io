import React from "react";
import "./TextInput.scss";

export const TextInput = ({
  onChange,
  value,
  type
}) => {
  const change = ({ currentTarget: { value } }) => onChange(value);

  return (
    <input
      className="inp"
      type={type}
      onChange={change}
      value={value}
    />
  );
}