<template>
  <Card />
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: {
    Card,
  },
};
</script>

<style>
body {
  background-color: #ccc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
