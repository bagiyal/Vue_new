<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Edit />
</template>

<script>
import HelloWorld from './resources/client/assets/js/components/HelloWorld.vue';
import Edit from './resources/client/assets/js/components/cruds/Accommodations/Edit.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Edit
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
