import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ transitionDelay }) {
  return _.map(transitionDelay, (classValue, className) => {
    return defineClass(`delay-${className}`, {
      'transition-delay': classValue
    })
  })
}
