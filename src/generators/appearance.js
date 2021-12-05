import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ appearance }) {
  return _.map(appearance, (classValue, className) => {
    return defineClass(`appearance-${className}`, {
      appearance: classValue
    })
  })
}
