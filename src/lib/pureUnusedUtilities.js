/**
 * 清除未使用的类
 */
import _ from 'lodash'
import postcss from 'postcss'
import purgeCss from '@fullhuman/postcss-purgecss'
import path from 'path'

export default function purgeUnusedUtilities (config) {
  const purgeEnabled = _.get(config, 'purge.enabled', false) === true || process.env.NODE_ENV === 'production'
  if (!purgeEnabled) {
    return function (css) {
      return css
    }
  }

  if (purgeEnabled) {
    const filePath = config.purge.paths.map(v => path.join(process.cwd(), v))
    return postcss([
      purgeCss({
        content: Array.isArray(config.purge) ? config.purge : filePath,
        defaultExtractor: content => content.match(/[^<>"'`\s]+(?<![:=])/g) || []
      })
    ])
  }
}
