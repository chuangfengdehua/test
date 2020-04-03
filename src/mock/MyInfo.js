/*
 * @Author: nichao
 * @Date: 2020-04-01 22:40:24
 * @LastEditTime: 2020-04-01 23:50:02
 */
const Mock = require('mockjs')
const page1 = [
  {
    code: 200,
    data: Mock.mock(['@id']
    )
  }
]
const res = {
  page1
}
export default res
