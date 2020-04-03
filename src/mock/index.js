/*
 * @Author: nichao
 * @Date: 2020-04-01 00:11:19
 * @LastEditTime: 2020-04-01 22:44:13
 */
import Mock from 'mockjs'
import MyInfo from './MyInfo.js'
Mock.mock('http://127.0.0.1/main.php', 'post', () => {
  return MyInfo.page1
})
