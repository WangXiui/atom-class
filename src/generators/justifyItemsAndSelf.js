import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ justifyItemsSelf }) {
  return _.flatMap(justifyItemsSelf, (classValue, className) => {
    return defineClasses({
      [`justify-items-${className}`]: {
        'justify-items': classValue
      },
      [`justify-self-${className}`]: {
        'justify-self': classValue
      }
    })
  })
}
