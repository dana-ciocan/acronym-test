<template>
  <div class="card-container">
    <div class="card" :class="messageClass">
      <h1>{{ acronym }}</h1>
      <p>What does this acronym stand for?</p>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="userDefinition" />
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const definitionsMatch = (definition1: string, definition2: string) =>
  definition1.toLowerCase() === definition2.toLowerCase();

export default defineComponent({
  name: 'Card',
  props: {
    acronym: String,
    expansion: String,
    numAcronyms: Number,
  },
  data: function() {
    return { message: '' };
  },
  methods: {
    checkAcronym: function(userDefinition: string, expansion: string) {
      if (definitionsMatch(userDefinition, expansion)) {
        return 'You got it right!';
      }
      return 'Try again';
    },
    getMessageClass: (userDefinition: string, definition: string) => {
      if (definitionsMatch(userDefinition, definition)) {
        return 'correct';
      }
      return 'error';
    },
  },
});
</script>

<style scoped></style>
