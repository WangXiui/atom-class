import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ overflow }) {
  return _.flatMap(overflow, (classValue, className) => {
    return defineClasses({
      [`overflow-${className}`]: {
        overflow: classValue
      },
      [`overflow-x-${className}`]: {
        'overflow-x': classValue
      },
      [`overflow-y-${className}`]: {
        'overflow-y': classValue
      }
    })
  })
}
