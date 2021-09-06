<template>
  <nav>
    <NavigationButton
      label="<< Previous"
      :event="'decrementAcronym'"
      @decrement-acronym="$emit('decrementAcronymNumber')"
    />
    <NavigationButton
      label="Next >>"
      :event="'incrementAcronym'"
      @increment-acronym="$emit('incrementAcronymNumber')"
    />
  </nav>
</template>

<script lang="ts">
import NavigationButton from './NavigationButton/NavigationButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NavigationButton,
  },
  data: function() {
    return {
      currentAcronymNumber: 1,
      totalAcronyms: 10,
    };
  },
  name: 'NavigationBar',
});
</script>

<style scoped></style>
