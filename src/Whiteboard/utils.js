const grid = 20.0

export function showTransformer(widgetRef, transformerRef, isSelected) {
  if (isSelected) {
    transformerRef.current.nodes([widgetRef.current])
    transformerRef.current.getLayer().batchDraw()
  }
}

export const snap = (x) => {
  if (!x) return null
  return Math.round(x / grid) * grid
}

export const scale = (node) => {
  const scaleX = node.scaleX()
  const scaleY = node.scaleY()

  node.scaleX(1)
  node.scaleY(1)

  return { scaleX: scaleX, scaleY: scaleY }
}

export const rectangularPosition = ({ x, y, height, width }) => {
  return {
    x: snap(x - width / 2),
    y: snap(y - height / 2)
  }
}

export const circularPosition = ({ x, y }) => {
  return {
    x: snap(x),
    y: snap(y)
  }
}
