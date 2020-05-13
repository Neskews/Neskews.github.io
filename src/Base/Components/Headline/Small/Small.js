import React from 'react';
import "./Small.scss";

export const Small = ({ label, isFetching, onClick }) => {
  return (
    <div className="Small" onClick={onClick}>
      <span>{label}</span>
      <span>{isFetching ? "Lädt" : ""}</span>
    </div>
  );
}