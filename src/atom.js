import generateStyles from './lib/generateStyles'
import defaultConfig from '../config/defaultConfig'

export default (opts) => {
  opts = opts || defaultConfig
  return {
    postcssPlugin: 'atom',
    Once (root) {
      generateStyles({ root, opts })
    }
  }
}

export const postcss = true
