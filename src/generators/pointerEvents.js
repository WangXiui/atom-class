import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ pointerEvents }) {
  return _.map(pointerEvents, (classValue, className) => {
    return defineClass(`pointer-events-${className}`, {
      'pointer-events': classValue
    })
  })
}
