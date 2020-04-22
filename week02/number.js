/*
 * @Author: mingxing.huang
 * @Date: 2020-04-22 22:16:50
 * 正则匹配Number字面量
 */
let reg = /^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
