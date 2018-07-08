<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {vantPlugins} from '../assets/js/utils'
export default {
  name: 'layout-default',
  mixins: [vantPlugins]
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
