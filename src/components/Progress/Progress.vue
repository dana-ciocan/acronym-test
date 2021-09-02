<template>
  <div class="progress-container">
    <div
      class="progress"
      :class="getProgressClass(currentAcronym, totalAcronyms)"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
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
};
</script>

<style scoped>
.progress-container {
  border: 1px solid black;
  height: 15px;
  padding: 3px;
  width: 50%;
  margin: 15px auto;
}

.progress {
  background-color: green;
  height: 15px;
}

.progress-0 {
  width: 0;
}

.progress-10 {
  width: 10%;
}

.progress-20 {
  width: 20%;
}

.progress-30 {
  width: 30%;
}

.progress-40 {
  width: 40%;
}

.progress-50 {
  width: 50%;
}

.progress-60 {
  width: 60%;
}

.progress-70 {
  width: 70%;
}

.progress-80 {
  width: 80%;
}

.progress-90 {
  width: 90%;
}

.progress-100 {
  width: 100%;
}
</style>
