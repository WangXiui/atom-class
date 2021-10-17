import generateStyles from './lib/generateStyles'

export default (opts) => {
  opts = opts || import('../config/defaultConfig')
  return {
    postcssPlugin: 'atom',
    Once (root) {
      generateStyles({ root, opts })
    }
  }
}

export const postcss = true
