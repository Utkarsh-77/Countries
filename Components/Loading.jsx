import React from "react";
import "./Loding.css";

export default function Loading() {
  return (
    <div className="skeleton-container">
     
      <div className="skeleton skeleton-flag"></div>

      <div className="skeleton-text">
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line long"></div>
        <div className="skeleton skeleton-line short"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line long"></div>
        <div className="skeleton skeleton-line"></div>

        {/* Borders */}
        <div className="skeleton-borders">
          <div className="skeleton skeleton-border-item"></div>
          <div className="skeleton skeleton-border-item"></div>
          <div className="skeleton skeleton-border-item"></div>
        </div>
      </div>
    </div>
  );
}
