export const makeExtensible = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
