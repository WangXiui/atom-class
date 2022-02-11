import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ transformOrigin }) {
  return _.map(transformOrigin, (classValue, className) => {
    return defineClass(`origin-${className}`, {
      'transform-origin': classValue
    })
  })
}
