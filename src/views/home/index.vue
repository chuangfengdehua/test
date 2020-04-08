<!--
 * @Author: nichao
 * @Date: 2020-03-31 23:58:17
 * @LastEditTime: 2020-04-06 08:35:54
 -->
<template>
  <div class="hello">
    <p>HELLO WORLD</p>
    <p>{{name}}</p>
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
// import axios from 'axios' // 局部引入
import ajax from '../../utils/ajax'
import { mapState } from 'vuex'
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
    console.log(this.$store)
    this.$store.commit('setName', 'xiaoxiao')
    console.log(this.$store.state.name)
  },
  methods: {
    showdata () {
      // const res = axios.post('http://127.0.0.1/main.php')
      // res.then((resolve) => {
      //   console.log(resolve)
      // }, () => { })
      ajax({
        url: 'https://api.apiopen.top/getJoke',
        type: 'post',
        async: true,
        param: {},
        success: function (data) {
          // console.log(data)
        }
      })
    }
  },
  computed: {
    ...mapState({
      name: 'name'
    })
  }
}
</script>
