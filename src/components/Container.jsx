import React from "react";
import "./Container.css";

const Container = ({ children, className = "", style = {}, ...props }) => {
  return (
    <div
      className={`container-component ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
