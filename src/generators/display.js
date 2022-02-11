import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ display }) {
  return _.map(display, (classValue, className) => {
    return defineClass(className, {
      display: classValue
    })
  })
}
