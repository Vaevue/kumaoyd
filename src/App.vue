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
  computed: {
    ...mapGetters(['playcontent'])
  },
}
</script>

<style>

</style>
