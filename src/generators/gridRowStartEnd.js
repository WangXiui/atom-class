import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ gridRowStartEnd }) {
  return _.flatMap(gridRowStartEnd, (classValue, className) => {
    return defineClasses({
      [`col-start-${className}`]: {
        'grid-row-start': classValue
      },
      [`col-end-${className}`]: {
        'grid-row-end': classValue
      }
    })
  })
}
