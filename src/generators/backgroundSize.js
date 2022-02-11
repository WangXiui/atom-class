import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ backgroundSize }) {
  return _.map(backgroundSize, (classValue, className) => {
    return defineClass(`bg-${className}`, {
      'background-size': classValue
    })
  })
}
