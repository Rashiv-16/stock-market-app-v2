import React, { useRef, useState, useEffect } from "react";

import HeroCard from "./HeroCard";

import Draggable from "react-draggable";

const quickAndDirtyStyle = {
  width: "200px",
  height: "200px",
  background: "#FF9900",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const DraggableComp = () => {
  return (
    <div>
      <Draggable handle="strong">
        <div className="box no-cursor">
          <strong className="cursor">Drag Here</strong>
          <div>You must click my handle to drag me</div>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableComp;
