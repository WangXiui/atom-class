import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ transitionTimingFunction }) {
  return _.map(transitionTimingFunction, (classValue, className) => {
    return defineClass(`ease-${className}`, {
      'transition-timing-function': classValue
    })
  })
}
