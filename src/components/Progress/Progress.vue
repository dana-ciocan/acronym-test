<template>
  <div class="progress">
    <div class="progress-container">
      <div
        v-for="n in percentage"
        :key="`progress-${n}`"
        class="progress-bar"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress',
  props: {
    percentage: Number,
  },
});
</script>

<style scoped>
.progress {
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  padding: 1rem;
}

.progress-container {
  border: 1px solid #333;
  height: 1.5rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
}

.progress-bar {
  background-color: green;
  height: 1.5rem;
  width: 1%;
  justify-content: flex-start;
}
</style>
