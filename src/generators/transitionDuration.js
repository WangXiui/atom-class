import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ transitionDuration }) {
  return _.map(transitionDuration, (classValue, className) => {
    return defineClass(`duration-${className}`, {
      'transition-duration': classValue
    })
  })
}
