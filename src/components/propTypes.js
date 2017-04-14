import T from 'prop-types'

export const IMargin = T.shape({
  top: T.number,
  right: T.number,
  bottom: T.number,
  left: T.number,
})

export const IScale = T.oneOf(['band', 'linear', 'sqrt', 'time'])

export const IAxisOptions = T.shape({
  padding: T.number,
  minRange: T.number,
  maxRange: T.number,
})

export const IStyle = T.shape({
  fill: T.string,
  fillOpacity: T.number,
  stroke: T.string,
  strokeWidth: T.number,
})
