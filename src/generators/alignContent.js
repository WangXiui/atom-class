import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ alignContent }) {
  return _.map(alignContent, (classValue, className) => {
    return defineClass(`content-${className}`, {
      'align-content': classValue
    })
  })
}
