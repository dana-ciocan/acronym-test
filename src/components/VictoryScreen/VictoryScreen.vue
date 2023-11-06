<script setup lang="ts">
import SpecialButton from '../SpecialButton/SpecialButton.vue';

const props = defineProps<{
  numCorrectAnswers: number;
  totalAcronyms: number;
}>();
</script>

<style>
.victory-container h1 {
  color: white;
  text-align: center;
  font-size: 2.25rem;
}

.victory-container p {
  color: white;
}

.victory-container .tada {
  margin: 2rem 0 4rem 0;
  font-size: 4rem;
  text-align: center;
}

.victory-container {
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rebeccapurple;
}

@media screen and (min-width: 75rem) {
  .victory-container {
    width: 100vw;
  }

  .victory-container h1 {
    font-size: 3rem;
  }

  .victory-container p {
    font-size: 2.25rem;
  }
}
</style>

<template>
  <div class="victory-container">
    <h1>The test is complete</h1>
    <p>
      You scored
      {{ props.numCorrectAnswers }} out of
      {{ props.totalAcronyms }}
    </p>
    <div v-if="props.numCorrectAnswers === props.totalAcronyms" class="tada">
      🎉🎉🎉
    </div>
    <p v-if="props.numCorrectAnswers < props.totalAcronyms">
      😔 better luck next time!
    </p>
    <SpecialButton :inverted="true">Play again?</SpecialButton>
  </div>
</template>
