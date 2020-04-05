<!--
 * @Author: nichao
 * @Date: 2020-03-31 23:58:17
 * @LastEditTime: 2020-04-04 12:17:53
 -->
<template>
  <div class="hello">
    <p>HELLO WORLD</p>
    <ul>
      <li v-for="(item,index) in datalist"
          :key='index'>
        <h1>{{item.personName}}:<span>{{item.viewName}}</span></h1>
      </li>
    </ul>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' // 局部引入
export default {
  name: 'HelloWorld',
  data () {
    return {
      datalist: [],
      num: 10
    }
  },
  mounted () {
    this.showdata()
  },
  methods: {
    showdata () {
      const res = axios.post('http://127.0.0.1/main.php')
      res.then((resolve) => {
        console.log(resolve)
      }, () => { })
    }
  }
}
</script>
