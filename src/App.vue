<template>
  <div id="app">
    <v-index></v-index>
    <v-plear v-if ='playcontent'></v-plear>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vIndex from './components/index/index'
import vPlear from './components/plear/plear'
export default {
  name: 'App',
  components: {
    vIndex,
    vPlear
  },
  methods:{
    _isMobile() {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	 return flag;
}
  },
  computed: {
    ...mapGetters(['playcontent'])
  },
  created() {
    
    if (this._isMobile()) {
      var url1 = 'www.baidu.com'
      location.href = 'https://vaevue.github.io/kumaoyd/dist/index.html'
    } else {
   window.location.href = 'https://vaevue.github.io/kumaoPC/dist/index.html'
    }
  }
}
</script>

<style>

</style>
