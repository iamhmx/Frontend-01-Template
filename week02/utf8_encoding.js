/*
 * @Author: mingxing.huang
 * @Date: 2020-04-22 22:04:49
 * 编写一个UTF8 Encoding函数
 */
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (let i = 0; i < code.length; i++) {
        const c = code.charAt();
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else {
            bytes.push(c.charCodeAt(0));
        }
    }
    return bytes;
}