import defineClass from '../util/defineClass'
import _ from 'lodash'
import defineClasses from '../util/defineClasses'

export default function ({ constNum, directions }) {
  return _.flatMap(constNum, (num, numKey) => {
    return _.flatten([
      _.flatMap(directions, (dir, dirKey) => {
        return defineClass(`border-${dirKey}-${numKey}`, {
          [`border-${dir}`]: `${num} solid #909399`
        })
      }),
      defineClasses({
        [`border-x-${numKey}`]: {
          'border-left': `${num} solid #909399`,
          'border-right': `${num} solid #909399`
        },
        [`border-y-${numKey}`]: {
          'border-top': `${num} solid #909399`,
          'border-bottom': `${num} solid #909399`
        },
        [`border-${numKey}`]: {
          border: `${num} solid #909399`
        }
      })
    ])
  })
}
