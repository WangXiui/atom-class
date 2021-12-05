import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ alignSelf }) {
  return _.map(alignSelf, (classValue, className) => {
    return defineClass(`self-${className}`, {
      'align-self': classValue
    })
  })
}
