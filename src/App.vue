<template>
  <div id="app">
    test test
    <test />
    <external-link class="ib"
                   :options="{
                      data: 'openmaps.phila.gov',
                      href: 'https://openmaps.phila.gov'
                   }"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Components from './components';
console.log('Components:', Components);

export default {
  name: 'app',
  components: {
    // HelloWorld
    ...Components
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
