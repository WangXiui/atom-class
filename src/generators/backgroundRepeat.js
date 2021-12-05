import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ backgroundRepeat }) {
  return _.map(backgroundRepeat, (classValue, className) => {
    return defineClass(`bg-${className}`, {
      'background-repeat': classValue
    })
  })
}
