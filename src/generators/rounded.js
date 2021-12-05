import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ percentage, constNum }) {
  return _.map({ ...percentage, ...constNum }, (classValue, className) => {
    return defineClass(`rounded-${className}`, {
      'border-radius': classValue
    })
  })
}
