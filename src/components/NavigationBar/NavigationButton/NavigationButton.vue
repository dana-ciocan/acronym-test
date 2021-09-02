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

<style scoped>
.nav-button {
  width: 50%;
}

input[type='button'] {
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 120%;
}
</style>
