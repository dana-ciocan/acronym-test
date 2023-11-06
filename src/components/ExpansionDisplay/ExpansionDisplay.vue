<script setup lang="ts">
const props = defineProps<{
  isAnswerCorrect: boolean;
  definition: string;
  expansion: string;
}>();
</script>

<template>
  <div class="expansion-display">
    <div :class="props.isAnswerCorrect ? 'answer correct' : 'answer incorrect'">
      <slot />
    </div>
    <details>
      <summary>{{ expansion }}</summary>
      <div class="definition">
        {{ definition }}
      </div>
    </details>
  </div>
</template>

<style>
.expansion-display .answer {
  text-align: center;
  font-size: 2.5rem;
}

.expansion-display .answer.incorrect {
  color: red;
}

.expansion-display .answer.correct {
  color: green;
}

.expansion-display .definition {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.expansion-display details {
  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rebeccapurple;
  width: 100%;
}

.expansion-display summary {
  font-weight: bold;
  font-size: 2rem;
  color: rebeccapurple;
  width: 100%;
}

.expansion-display {
  margin-top: 2rem;
}

@media screen and (min-width: 60rem) {
  .expansion-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
