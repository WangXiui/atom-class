import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ strokeWidth }) {
  return _.map(strokeWidth, (classValue, className) => {
    return defineClass(`stroke-${className}`, {
      'stroke-width': classValue
    })
  })
}
