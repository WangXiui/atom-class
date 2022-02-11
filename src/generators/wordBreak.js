import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ wordBreak }) {
  return _.map(wordBreak, (classValue, className) => {
    return defineClass(`${className}`, {
      'word-break': classValue
    })
  })
}
