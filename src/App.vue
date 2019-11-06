<template>
  <div id="app">
    <el-button>el-button</el-button>
    <div v-resize="onResize" style="width: 50%; height: 200px; background: green;"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    onResize (event) {
      console.log('resize', event)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
