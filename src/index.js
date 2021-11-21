#!/user/bin/env node

import postcss from 'postcss'
import atom from '../src/atom'
import defaultConfig from '../config/defaultConfig'
import fse from 'fs-extra'
// import fs from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import stylefmt from 'stylefmt'

// The current file does two things.
// 1.You can customize the defaultconfig configuration file.
// 2.Process user specified entry style files and output it to the specified folder.

function splitFilename (filename) {
  return filename.split('.')
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-c, --config [value]', 'Pass custom configuration')
  .parse(process.argv)

const options = program.opts()

// 2.input/output filepath
const inputFile = program.args[0]
if (!inputFile) {
  console.log('inputFile doesnot exit')
  process.exit(1)
}
const outputFile = program.args[1] || `${splitFilename(program.args[0])[0]}-output.css`

// 1.config file
async function mergeConfig () {
  try {
    // const customConfig = JSON.parse(config.toString())
    const customConfig = await import(path.join(process.cwd(), options.config)) || {}
    return {
      ...defaultConfig,
      ...customConfig.default
    }
  } catch (err) {
    console.log(`config file ${options.config} does not exit`)
    process.exit(1)
  }
}

// finally execute
async function executePostcss () {
  try {
    const inputFilePath = fse.pathExistsSync(path.join(process.cwd(), inputFile))
    const css = fse.pathExistsSync(inputFilePath)
      ? await fse.readFile(path.join(process.cwd(), inputFile))
      : ''
    postcss([
      atom(await mergeConfig()),
      stylefmt
    ])
      .process(css, {
        from: '../css/atom.css',
        to: '../css/atom.css',
        map: { inline: false }
      })
      .then(res => {
        fse.outputFileSync(outputFile, res.css)
      })
      .catch(err => console.log(err))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
executePostcss()
