import cn from "classnames";
import React from "react";
import "./LoadingOverlay.css";

const LoadingOverlay = ({ show = true, className = "", }) => {
  if (!show) return null;

  return (
    <div className={cn("loading-overlay", className)} >
      <div className={"loader"} />
    </div>
  );
};

export default LoadingOverlay;
