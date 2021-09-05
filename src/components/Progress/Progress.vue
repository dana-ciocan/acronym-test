<template>
  <div class="progress">
    <div class="progress-container">
      <div
        class="progress-bar"
        :class="getProgressClass(currentAcronym, totalAcronyms)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress',
  props: {
    currentAcronym: Number,
    totalAcronyms: Number,
  },
  methods: {
    getProgressClass: (current: number, total: number) => {
      const progressPercent: number = Math.round((current / total) * 100);
      return `progress-${Math.round(progressPercent / 10) * 10}`;
    },
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
}

.progress-bar {
  background-color: green;
  height: 1.5rem;
}

.progress-bar.progress-0 {
  width: 0%;
}
.progress-bar.progress-10 {
  width: 10%;
}
.progress-bar.progress-20 {
  width: 20%;
}
.progress-bar.progress-30 {
  width: 30%;
}
.progress-bar.progress-40 {
  width: 40%;
}
.progress-bar.progress-50 {
  width: 50%;
}
.progress-bar.progress-60 {
  width: 60%;
}
.progress-bar.progress-70 {
  width: 70%;
}
.progress-bar.progress-80 {
  width: 80%;
}
.progress-bar.progress-90 {
  width: 90%;
}
.progress-bar.progress-100 {
  width: 100%;
}
</style>
