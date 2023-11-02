<script setup lang="ts">
const props = defineProps<{
  numAcronym: number;
  totalAcronyms: number;
  curAcronym: string;
}>();
</script>

<style>
h2 {
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
}

p {
  font-size: 1.5rem;
  text-align: center;
}

dfn {
  font-size: 4rem;
  font-style: normal;
  font-weight: bold;
  color: rebeccapurple;
  display: block;
  text-align: center;
  padding-top: 2rem;
}
</style>

<template>
  <header>
    <h2>Acronym {{ props.numAcronym }}/{{ props.totalAcronyms }}</h2>
    <dfn>
      {{ props.curAcronym }}
    </dfn>
    <p>What does this acronym stand for?</p>
  </header>
</template>
