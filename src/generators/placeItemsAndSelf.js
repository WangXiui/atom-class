import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ placeItemsSelf }) {
  return _.flatMap(placeItemsSelf, (classValue, className) => {
    return defineClasses({
      [`place-items-${className}`]: {
        'place-items': classValue
      },
      [`place-self-${className}`]: {
        'place-self': classValue
      }
    })
  })
}
