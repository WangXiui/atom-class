import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ placeContent }) {
  return _.map(placeContent, (classValue, className) => {
    return defineClass(`place-content-${className}`, {
      'place-content': classValue
    })
  })
}
