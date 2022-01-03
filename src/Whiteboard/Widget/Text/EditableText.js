import React from 'react'

import { Text as KonvaText } from 'react-konva'
import { Html } from 'react-konva-utils'

const RETURN_KEY = 13
const ESCAPE_KEY = 27

function getStyle(width, height) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: "none",
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    colour: "black",
    fontSize: "18px",
    fontFamily: "sans-serif",
    textAlign: 'center',
    verticalAlign: 'central'
  };
  if (isFirefox) {
    return baseStyle;
  }
  return {
    ...baseStyle,
    margintop: "-4px"
  };
}

export default function EditableText({
  id,
  x,
  y,
  isEditing,
  text,
  width,
  height,
  handleEscape,
  onTextChange,
  ...style
}) {

  function handleEscapeKeys(e) {
    if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
      handleEscape()
    }
  }

  const { fill, ...textProps } = style

  if (isEditing) {
    return (
      <Html divProps={{ style: { opacity: 1 } }}>
        <textarea
          type='text'
          width={width}
          height={height}
          value={text}
          onChange={ onTextChange }
          onKeyDown={ handleEscapeKeys }
          style={ getStyle(width, height) }
        />
      </Html>
    );
  }
  return (
    <KonvaText
      text={text}
      width={width}
      height={height}
      align={ 'center' }
      verticalAlign={ 'middle' }
      { ...textProps }
      fill={ style.textColor }
    />
  );
}
