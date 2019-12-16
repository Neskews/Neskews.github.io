import React from 'react';
import "./Location.scss";

export const Location = ({ location: { where, when } }) => {
  return (
    <div className="Location">
      <span>{where}</span> - <span>{new Date(when).toLocaleDateString()}</span>
    </div>
  );
}