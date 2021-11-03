import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ backgroundAttachment }) {
  return _.map(backgroundAttachment, (classValue, className) => {
    return defineClass(`bg-${className}`, {
      'background-attachment': classValue
    })
  })
}
