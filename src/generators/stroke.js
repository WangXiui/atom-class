import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ stroke }) {
  return _.map(stroke, (classValue, className) => {
    return defineClass(`stroke-${className}`, {
      stroke: classValue
    })
  })
}
