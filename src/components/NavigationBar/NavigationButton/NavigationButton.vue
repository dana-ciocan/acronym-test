<template>
  <div class="nav-button">
    <input type="button" :value="label" @click="$emit(event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationButton',
  props: {
    label: String,
    event: String,
  },
});
</script>

<style scoped></style>
