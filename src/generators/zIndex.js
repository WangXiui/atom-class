import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ zIndex }) {
  return _.map(zIndex, (classValue, className) => {
    return defineClass(`z-${className}`, {
      'z-index': classValue
    })
  })
}
