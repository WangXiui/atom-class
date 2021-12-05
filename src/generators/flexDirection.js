import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ flexDirection }) {
  return _.map(flexDirection, (classValue, className) => {
    return defineClass(`flex-${className}`, {
      'flex-direction': classValue
    })
  })
}
