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
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rebeccapurple;
}

.expansion-display summary {
  font-weight: bold;
  font-size: 2rem;
  color: rebeccapurple;
}

.expansion-display {
  margin-top: 2rem;
}

@media screen and (min-width: 60rem) {
  .expansion-display {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
