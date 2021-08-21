<template>
  <Card />
</template>

<script lang="ts">
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
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
