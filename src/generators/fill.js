import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fill }) {
  return _.map(fill, (classValue, className) => {
    return defineClass(`fill-${className}`, {
      fill: classValue
    })
  })
}
