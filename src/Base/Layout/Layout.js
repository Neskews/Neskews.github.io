import React from 'react';
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {children}
    </div>
  );
} 