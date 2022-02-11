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
import overscrollBehavior from '../generators/overscrollBehavior'
import position from '../generators/position'
import visibility from '../generators/visibility'
import zIndex from '../generators/zIndex'
import gridTemplateColumns from '../generators/gridTemplateColumns'
import gridColumn from '../generators/gridColumn'
import gridColumnStartEnd from '../generators/gridColumnStartEnd'
import gridTemplateRows from '../generators/gridTemplateRows'
import gridRow from '../generators/gridRow'
import gridRowStartEnd from '../generators/gridRowStartEnd'
import gridAutoFlow from '../generators/gridAutoFlow'
import gridAutoRowsColumns from '../generators/gridAutoRowsColumns'
import justifyContent from '../generators/justifyContent'
import justifyItemsAndSelf from '../generators/justifyItemsAndSelf'
import alignContent from '../generators/alignContent'
import alignItems from '../generators/alignItems'
import alignSelf from '../generators/alignSelf'
import flexDirection from '../generators/flexDirection'
import flexWrap from '../generators/flexWrap'
import flexGrow from '../generators/flexGrow'
import flexShrink from '../generators/flexShrink'
import spaces from '../generators/spaces'
import rectangleAndMinMax from '../generators/rectangleAndMinMax'
import fontsize from '../generators/fontSize'
import leading from '../generators/leading'
import listStyleType from '../generators/listStyleType'
import listStylePosition from '../generators/listStylePosition'
import textAlign from '../generators/textAlign'
import color from '../generators/color'
import backgroundColor from '../generators/backgroundColor'
import textDecoration from '../generators/textDecoration'
import textTransform from '../generators/textTransform'
import verticalAlign from '../generators/verticalAlign'
import whitespace from '../generators/whitespace'
import backgroundAttachment from '../generators/backgroundAttachment'
import backgroundClip from '../generators/backgroundClip'
import backgroundRepeat from '../generators/backgroundRepeat'
import backgroundSize from '../generators/backgroundSize'
import rounded from '../generators/rounded'
import border from '../generators/border'
import boxShadow from '../generators/boxShadow'
import decimalTypes from '../generators/decimalTypes'
import borderCollapse from '../generators/borderCollapse'
import tableLayout from '../generators/tableLayout'
import transformOrigin from '../generators/transformOrigin'
import resize from '../generators/resize'
import userSelect from '../generators/userSelect'
import fill from '../generators/fill'
import stroke from '../generators/stroke'
import strokeWidth from '../generators/strokeWidth'
import placeItemsAndSelf from '../generators/placeItemsAndSelf'
import placeContent from '../generators/placeContent'
import fontFamily from '../generators/fontFamily'
import fontSmoothing from '../generators/fontSmoothing'
import fontStyle from '../generators/fontStyle'
import fontVariantNumeric from '../generators/fontVariantNumeric'
import letterSpacing from '../generators/letterSpacing'
import textOverflow from '../generators/textOverflow'
import wordBreak from '../generators/wordBreak'
import overflowWrap from '../generators/overflowWrap'
import transition from '../generators/transition'
import transitionDuration from '../generators/transitionDuration'
import transitionTimingFunction from '../generators/transitionTimingFunction'
import transitionDelay from '../generators/transitionDelay'
import appearance from '../generators/appearance'
import outline from '../generators/outline'
import pointerEvents from '../generators/pointerEvents'

export default function ({ root, opts }) {
  // 1.生成规则
  const styles = _.flatten([
    pointerEvents(opts),
    outline(opts),
    appearance(opts),
    transitionDelay(opts),
    transitionTimingFunction(opts),
    transitionDuration(opts),
    transition(opts),
    overflowWrap(opts),
    wordBreak(opts),
    textOverflow(opts),
    letterSpacing(opts),
    fontVariantNumeric(opts),
    fontStyle(opts),
    fontSmoothing(opts),
    fontFamily(opts),
    placeContent(opts),
    placeItemsAndSelf(opts),
    strokeWidth(opts),
    stroke(opts),
    fill(opts),
    userSelect(opts),
    resize(opts),
    cursor(opts),
    transformOrigin(opts),
    tableLayout(opts),
    borderCollapse(opts),
    decimalTypes(opts),
    boxShadow(opts),
    border(opts),
    rounded(opts),
    backgroundSize(opts),
    backgroundRepeat(opts),
    backgroundClip(opts),
    backgroundAttachment(opts),
    whitespace(opts),
    verticalAlign(opts),
    textTransform(opts),
    textDecoration(opts),
    backgroundColor(opts),
    color(opts),
    textAlign(opts),
    listStylePosition(opts),
    listStyleType(opts),
    leading(opts),
    fontWeight(opts),
    fontsize(opts),
    rectangleAndMinMax(opts),
    spaces(opts),
    flexShrink(opts),
    flexGrow(opts),
    flexWrap(opts),
    flexDirection(opts),
    alignSelf(opts),
    alignItems(opts),
    alignContent(opts),
    justifyItemsAndSelf(opts),
    justifyContent(opts),
    gridAutoRowsColumns(opts),
    gridAutoFlow(opts),
    gridRowStartEnd(opts),
    gridRow(opts),
    gridTemplateRows(opts),
    gridColumnStartEnd(opts),
    gridColumn(opts),
    gridTemplateColumns(opts),
    zIndex(opts),
    visibility(opts),
    position(opts),
    overscrollBehavior(opts),
    overflow(opts),
    objectPosition(opts),
    objectFit(opts),
    clear(opts),
    float(opts),
    display(opts),
    boxSizing(opts)
  ])
  // 2.插入原样式文件内
  root.append(styles)
}
