import { useState } from 'react'
import { View, parse } from 'vega'
import { compile } from 'vega-lite'
import sha256 from 'crypto-js/sha256'

import { makeExtensible } from 'utils'

let imageCache = {}

const generateImage = (svg) => {
  const doc = new DOMParser().parseFromString(svg, "text/xml")
  const svgElement = doc.getElementsByTagName('svg')[0]
  const clonedSvgElement = svgElement.cloneNode(true)
  const outerHTML = clonedSvgElement.outerHTML
  const blob = new Blob([outerHTML], { type:'image/svg+xml;charset=utf-8' })
  const URL = window.URL || window.webkitURL || window
  const blobURL = URL.createObjectURL(blob)
  const image = new window.Image()
  image.src = blobURL
  return image
}

export function useChartImage(rawSpec) {
  const [svgData, setSvgData] = useState(null)

  const specHash = sha256(JSON.stringify(rawSpec))

  const spec = makeExtensible(rawSpec)

  if (imageCache[specHash]) return imageCache[specHash]

  const compiledSpec = compile(spec, {}).spec
  const view = new View(parse(compiledSpec), { renderer: 'svg' })
  view.toSVG().then((svg) => setSvgData(svg))

  if (svgData === null) return null

  const image = generateImage(svgData)
  imageCache[specHash] = image
  return image
}

