import React from "react";
import { Circle as KonvaCircle } from "react-konva";

export default function Circle({ type, id, ...widgetProps }) {
  return (
    <KonvaCircle {...widgetProps} />
  );
}
