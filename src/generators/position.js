import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ position }) {
  return _.map(position, (classValue, className) => {
    return defineClass(`${className}`, {
      position: classValue
    })
  })
}
