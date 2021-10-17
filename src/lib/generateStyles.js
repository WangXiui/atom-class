import fontWeight from '../generators/fontWeight'
import _ from 'lodash'

export default function ({ root, opts }) {
  // 1.生成规则
  const styles = _.flatten([
    fontWeight(opts)
  ])
  // 2.插入原样式文件内
  root.append(styles)
}
