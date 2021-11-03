import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ flexGrow }) {
  return _.map(flexGrow, (classValue, className) => {
    return defineClass(`flex-${className}`, {
      'flex-row': classValue
    })
  })
}
