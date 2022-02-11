import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ gridColumnStartEnd }) {
  return _.flatMap(gridColumnStartEnd, (classValue, className) => {
    return defineClasses({
      [`col-start-${className}`]: {
        'grid-column-start': classValue
      },
      [`col-end-${className}`]: {
        'grid-column-end': classValue
      }
    })
  })
}
