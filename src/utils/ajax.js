/*
 * @Author: nichao
 * @Date: 2020-04-04 12:25:30
 * @LastEditTime: 2020-04-05 23:32:59
 */
// function ajax (opt) {
//   let xhr =
// }

// let xhr = null
// if (window.XMLHttpRequest) {
//   xhr = new XMLHttpRequest()
// } else {
//   xhr = new ActiveXObject('Microsoft.XMLHTTP')
// }

// xhr.open('GET', 'https://api.apiopen.top/singlePoetry', true)

// xhr.send()

// xhr.onreadystatechange = function () {
//   console.log(xhr)
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText)
//   }
// }

// let xhr = null

// if (window.XMLHttpRequest) {
//   xhr = new XMLHttpRequest()
// } else {
//   xhr = new ActiveXObject('Micorsoft.XMLHTTP')
// }

// xhr.open('POST', 'https://www.apiopen.top/createUser', true)

// // xhr.setRequestHeader = 'Content-Type, "application/x-www-form-urlencoded"'

// xhr.send(JSON.stringify({
//   key: '00d91e8e0cca2b76f515926a36db68f5',
//   phone: '13594347817',
//   passwd: '123654'
// }))

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText)
//   } else {
//     console.log('错误啦')
//   }
// }
// opt
// {
//   type: GET / POST 请求类型
//   param: { } / 请求参数
//   url:''  请求路径
//   success: function () {}
//    asyam: Boolean
// }
function ajax (opt) {
  let xhr = null
  if (!opt || typeof opt !== 'object') {
    return console.log('错误')
  }
  opt.param = opt.param || {}
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = ActiveXObject('Microsoft.XMLHTTP')
  }
  if (opt.type.toUpperCase === 'GET') {
    let data = '?'
    for (let key in opt.param) {
      data += key + '&' + opt.param[key]
    }
    xhr.open(opt.type.toUpperCase(), opt.url + data, opt.async)
    xhr.send()
  } else {
    xhr.setRequestHeader = 'Content-Type, "application/x-www-form-urlencoded"'
    xhr.open(opt.type.toUpperCase(), opt.url, opt.async)
    xhr.send(opt.param)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      opt.success(xhr.responseText)
    }
  }
}
export default ajax
