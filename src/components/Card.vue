<template>
  <div class="card-container" ontouchstart="this.classList.toggle('hover');">
    <div class="card">
      <h1>{{ randomAcronym.acronym }}</h1>
      <p>What does this acronym stand for?</p>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="userDefinition" />
        <input
          type="submit"
          value="Check"
          @click="
            (message = checkAcronym(userDefinition, randomAcronym.expansion)),
              (messageClass = getMessageClass(
                userDefinition,
                randomAcronym.expansion,
              ))
          "
        />
      </form>
      <p :class="messageClass">{{ message }}</p>
      <div v-if="acronyms.length > 0">
        <input
          v-if="messageClass === 'message'"
          type="button"
          value="Next term"
          @click="
            (randomAcronym = acronyms.splice(
              Math.floor(Math.random() * acronyms.length),
              1,
            )[0]),
              (messageClass = ''),
              (userDefinition = ''),
              (message = '')
          "
        />
      </div>
      <div v-if="messageClass === 'message' && acronyms.length === 0">
        You have gone through all the terms - congratulations!
      </div>
    </div>
  </div>
</template>

<script>
import acronyms from '../data/acronyms.json';

const definitionsMatch = (definition1, definition2) =>
  definition1.toLowerCase() === definition2.toLowerCase();

export default {
  name: 'Card',
  props: {
    acronym: String,
    definition: String,
  },
  data: () => ({
    userDefinition: '',
    message: '',
    acronyms,
    randomAcronym: acronyms.splice(
      Math.floor(Math.random() * acronyms.length),
      1,
    )[0],
    messageClass: '',
  }),
  methods: {
    checkAcronym: (userDefinition, definition) => {
      let message = `You said: '${userDefinition}'`;
      if (definitionsMatch(userDefinition, definition)) {
        message += ' - you are right!';
      } else {
        message += ' - try again';
      }
      return message;
    },
    getMessageClass: (userDefinition, definition) => {
      if (definitionsMatch(userDefinition, definition)) {
        return 'message';
      }
      return 'error';
    },
  },
};
</script>

<style scoped>
div.card {
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding: 15px;
  background-color: #fff;
  width: 33%;
}
</style>
