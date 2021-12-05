import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ spaceTypes, spaceSizes, directions }) {
  return _.flatMap(spaceTypes, (type, typeKey) => {
    return _.flatMap(spaceSizes, (size, sizeKey) => {
      return _.flatten([
        // 每条边：类似mt0, mr0, mb0, ml0
        _.flatMap(directions, (dir, dirKey) => {
          return defineClass(`${typeKey}${dirKey}${sizeKey}`, {
            [`${type}-${dir}`]: size
          })
        }),
        // 对角边: mx0, my0
        defineClass(`${typeKey}x${sizeKey}`, {
          [`${type}-left`]: size,
          [`${type}-right`]: size
        }),
        defineClass(`${typeKey}y${sizeKey}`, {
          [`${type}-top`]: size,
          [`${type}-bottom`]: size
        }),
        // 所有边: ma0
        defineClass(`${typeKey}a${sizeKey}`, {
          [`${type}`]: size
        })
      ])
    })
  })
}
