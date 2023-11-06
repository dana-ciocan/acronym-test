<script setup lang="ts">
const props = defineProps<{
  inverted?: boolean;
}>();
</script>

<template>
  <button :class="props.inverted ? 'inverted' : undefined"><slot /></button>
</template>

<style>
button {
  background-color: rebeccapurple;
  border: none;
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
}

button.inverted {
  color: rebeccapurple;
  background-color: white;
}

@media screen and (min-width: 75rem) {
  button {
    font-size: 1.5rem;
    width: 25rem;
  }
}
</style>
