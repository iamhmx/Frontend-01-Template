/*
 * @Author: mingxing.huang
 * @Date: 2020-05-27 18:29:59
 */
//w3.org/TR/?tag=css

const list = document.getElementById('container').children

const result = []
for (let li of list) {
    if (li.getAttribute('data-tag').match(/css/)) {
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href,
        })
    }
}

console.log(result)
console.log(JSON.stringify(result, null, '   '))