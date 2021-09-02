<template>
  <nav>
    <NavigationButton
      label="<< Previous"
      :currentAcronym="currentAcronym"
      :totalAcronyms="totalAcronyms"
      :event="'decrementAcronym'"
      @decrement-acronym="decrementAcronymNumber()"
    />
    <NavigationButton
      label="Next >>"
      :currentAcronym="currentAcronym"
      :totalAcronyms="totalAcronyms"
      :event="'incrementAcronym'"
      @increment-acronym="incrementAcronymNumber()"
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
  methods: {
    incrementAcronymNumber(): void {
      if (this.currentAcronymNumber < this.totalAcronyms) {
        this.currentAcronymNumber = this.currentAcronymNumber + 1;
      }
      this.$emit('updateAcronymNumber', this.currentAcronymNumber);
    },
    decrementAcronymNumber(): void {
      if (this.currentAcronymNumber > 0) {
        this.currentAcronymNumber = this.currentAcronymNumber - 1;
      }
      this.$emit('updateAcronymNumber', this.currentAcronymNumber);
    },
  },
});
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
}
</style>
