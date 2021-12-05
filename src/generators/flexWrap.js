import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ flexWrap }) {
  return _.map(flexWrap, (classValue, className) => {
    return defineClass(`flex-${className}`, {
      'flex-wrap': classValue
    })
  })
}
