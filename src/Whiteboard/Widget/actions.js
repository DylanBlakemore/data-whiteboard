import { WIDGET_TYPES } from './constants'
import { addWidget } from 'Whiteboard/state'

const DEFAULTS = {
  RECT: {
    STROKE: '#000000',
    FILL: '#ffffff',
    WIDTH: 150,
    HEIGHT: 100,
    ROTATION: 0
  },
  BAR_CHART: {
    STROKE: '#000000',
    FILL: '#ffffff',
    WIDTH: 150,
    HEIGHT: 100,
    ROTATION: 0
  },
  CIRCLE: {
    STROKE: '#000000',
    FILL: '#ffffff',
    RADIUS: 50
  }
}

export function showTransformer(widgetRef, transformerRef, isSelected) {
  if (isSelected) {
    transformerRef.current.nodes([widgetRef.current])
    transformerRef.current.getLayer().batchDraw()
  }
}

export const scale = (node) => {
  const scaleX = node.scaleX()
  const scaleY = node.scaleY()

  node.scaleX(1)
  node.scaleY(1)

  return { scaleX: scaleX, scaleY: scaleY }
}

// Circle

function createCircle({ x, y }) {
  addWidget({
    x: x,
    y: y,
    type: WIDGET_TYPES.CIRCLE,
    radius: DEFAULTS.CIRCLE.RADIUS,
    fill: DEFAULTS.CIRCLE.FILL,
    stroke: DEFAULTS.CIRCLE.STROKE
  })
}

// Rectangle

function createRectangle({ x, y }) {
  addWidget({
    x: x - DEFAULTS.RECT.WIDTH / 2,
    y: y - DEFAULTS.RECT.HEIGHT / 2,
    type: WIDGET_TYPES.RECT,
    width: DEFAULTS.RECT.WIDTH,
    height: DEFAULTS.RECT.HEIGHT,
    fill: DEFAULTS.RECT.FILL,
    stroke: DEFAULTS.RECT.STROKE,
    rotation: DEFAULTS.RECT.ROTATION
  })
}

// Bar chart

function createBarChart({ x, y }) {
  addWidget({
    x: x - DEFAULTS.RECT.WIDTH / 2,
    y: y - DEFAULTS.RECT.HEIGHT / 2,
    type: WIDGET_TYPES.BAR_CHART,
    width: DEFAULTS.BAR_CHART.WIDTH,
    height: DEFAULTS.BAR_CHART.HEIGHT,
    fill: DEFAULTS.BAR_CHART.FILL,
    stroke: DEFAULTS.BAR_CHART.STROKE,
    rotation: DEFAULTS.BAR_CHART.ROTATION
  })
}

// Accessors

export const createWidget = {
  [WIDGET_TYPES.RECT]: createRectangle,
  [WIDGET_TYPES.CIRCLE]: createCircle,
  [WIDGET_TYPES.BAR_CHART]: createBarChart
}
