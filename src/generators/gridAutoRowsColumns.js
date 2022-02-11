import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ gridAutoRowsColumns }) {
  return _.flatMap(gridAutoRowsColumns, (classValue, className) => {
    return defineClasses({
      [`auto-rows-${className}`]: {
        'grid-auto-rows': classValue
      },
      [`auto-cols-${className}`]: {
        'grid-auto-columns': classValue
      }
    })
  })
}
