import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ justifyContent }) {
  return _.map(justifyContent, (classValue, className) => {
    return defineClass(`justify-${className}`, {
      'justify-content': classValue
    })
  })
}
