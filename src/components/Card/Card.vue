<template>
  <div class="card-container">
    <div class="card" :class="messageClass">
      <h1>{{ acronym }}</h1>
      <p>What does this acronym stand for?</p>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="userDefinition" />
        <input
          type="submit"
          value="Check"
          @click="message = checkAcronym(userDefinition, expansion)"
        />
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px;
  padding: 15px;
  background-color: #fff;
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.card.error {
  background-color: lightcoral;
}

.card.correct {
  background-color: mediumspringgreen;
}

.message,
.complete {
  height: 15px;
}

.complete {
  margin-bottom: 15px;
}
</style>

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
