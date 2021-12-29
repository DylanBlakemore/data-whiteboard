const grid = 20.0

export function showTransformer(widgetRef, transformerRef, isSelected) {
  if (isSelected) {
    transformerRef.current.nodes([widgetRef.current])
    transformerRef.current.getLayer().batchDraw()
  }
}

export const snap = (x) => {
  return Math.round(x / grid) * grid
}

export const scale = (node) => {
  const scaleX = node.scaleX()
  const scaleY = node.scaleY()

  node.scaleX(1)
  node.scaleY(1)

  return { scaleX: scaleX, scaleY: scaleY }
}
