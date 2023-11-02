<script setup lang="ts">
const props = defineProps<{
  numAcronym: number;
  totalAcronyms: number;
  curAcronym: string;
}>();
</script>

<template>
  <header>
    <h2>
      Acronym {{ props.numAcronym }}/{{ props.totalAcronyms }}:
      {{ props.curAcronym }}
    </h2>
    <p>What does this acronym stand for?</p>
  </header>
</template>
