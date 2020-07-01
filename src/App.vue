<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    this.$http.get('https://randomuser.me/api/')
    .then((response) => {
      console.log(response.data)
    });
  }
}
</script>

<style>
#app{
  font-family: 'Avenir';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
