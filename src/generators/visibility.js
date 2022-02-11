import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ visibility }) {
  return _.map(visibility, (classValue, className) => {
    return defineClass(`${className}`, {
      visibility: classValue
    })
  })
}
