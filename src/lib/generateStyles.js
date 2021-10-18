import _ from 'lodash'
import fontWeight from '../generators/fontWeight'
import boxSizing from '../generators/boxSizing'
import cursor from '../generators/cursor'
import display from '../generators/display'
import float from '../generators/float'
import clear from '../generators/clear'
import objectFit from '../generators/objectFit'
import objectPosition from '../generators/objectPosition'
import overflow from '../generators/overflow'

export default function ({ root, opts }) {
  // 1.生成规则
  const styles = _.flatten([
    overflow(opts),
    objectPosition(opts),
    objectFit(opts),
    clear(opts),
    float(opts),
    display(opts),
    cursor(opts),
    boxSizing(opts),
    fontWeight(opts)
  ])
  // 2.插入原样式文件内
  root.append(styles)
}
