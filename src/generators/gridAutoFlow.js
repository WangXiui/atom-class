import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ gridAutoFlow }) {
  return _.map(gridAutoFlow, (classValue, className) => {
    return defineClass(`grid-flow-${className}`, {
      'grid-auto-flow': classValue
    })
  })
}
