import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ textOverflow }) {
  return _.map(textOverflow, (classValue, className) => {
    return defineClass(`overflow-${className}`, {
      'text-overflow': classValue
    })
  })
}
