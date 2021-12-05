import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ gridTemplateRows }) {
  return _.map(gridTemplateRows, (classValue, className) => {
    return defineClass(`grid-rows-${className}`, {
      'grid-template-rows': classValue
    })
  })
}
