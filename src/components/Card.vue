<template>
  <div class="card-container">
    <div class="card" :class="messageClass">
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
      <p>{{ message }}</p>
      <div v-if="messageClass === 'message' && acronyms.length === 0">
        You have gone through all the terms - congratulations!
      </div>
      <input
        type="button"
        value="Next term >>"
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
        return 'correct';
      }
      return 'error';
    },
  },
};
</script>

<style scoped>
.card {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  border-radius: 15px;
  padding: 15px;
  background-color: #fff;
  width: 400px;
  height: 200px;
  margin-top: -115px;
  margin-left: -215px;
}

.card.error {
  background-color: lightcoral;
}

.card.correct {
  background-color: mediumspringgreen;
}
</style>
