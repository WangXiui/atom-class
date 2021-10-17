import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ fontWeight }) {
  return _(fontWeight).toPairs().map(([className, size]) => {
    return defineClass(`fontWeight-${className}`, {
      fontWeight: size
    })
  }).value()
}
