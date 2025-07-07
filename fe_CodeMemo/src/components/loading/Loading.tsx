import React from "react";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loader">
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__ball" />
      </div>
    </div>
  );
};

export default Loading;
