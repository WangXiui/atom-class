import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ textTransform }) {
  return _.map(textTransform, (classValue, className) => {
    return defineClass(`${className}`, {
      'text-transform': classValue
    })
  })
}
