/*
 * @Author: mingxing.huang
 * @Date: 2020-04-22 22:34:25
 * 匹配String字面量
 */
// Unicode
let reg1 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E])[\u0021-\u007E]{6,16}$/
// ASCII
let reg2 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x21-\x7E]{6,16}$/
// 单双引号
let reg3 = /(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*/