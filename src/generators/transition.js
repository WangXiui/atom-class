import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ transition }) {
  return _.map(transition, (classValue, className) => {
    return defineClass(`transition-${className}`, {
      'transition-property': classValue,
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms'
    })
  })
}
