<template>
  <div class="card-container">
    <div class="card" :class="messageClass">
      <div class="counter">
        Progress: {{ selectedAcronym + 1 }}/{{ acronyms.length }}
      </div>
      <h1>{{ acronyms[selectedAcronym].acronym }}</h1>
      <p>What does this acronym stand for?</p>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="userDefinition" />
        <input
          type="submit"
          value="Check"
          @click="
            (message = checkAcronym(
              userDefinition,
              acronyms[selectedAcronym].expansion,
            )),
              (messageClass = getMessageClass(
                userDefinition,
                acronyms[selectedAcronym].expansion,
              ))
          "
        />
      </form>
      <p>{{ message }}</p>
      <div v-if="selectedAcronym === acronyms.length">
        You have gone through all the terms - congratulations!
      </div>
      <div class="nav-buttons">
        <div class="prev-button">
          <input
            v-if="selectedAcronym > 0"
            type="button"
            value="<< Previous"
            @click="
              (selectedAcronym =
                selectedAcronym > 0 ? selectedAcronym - 1 : selectedAcronym),
                (messageClass = ''),
                (userDefinition = ''),
                (message = '')
            "
          />
        </div>
        <div class="next-button">
          <input
            v-if="selectedAcronym < acronyms.length - 1"
            type="button"
            value="Next >>"
            @click="
              (selectedAcronym =
                selectedAcronym < acronyms.length - 1
                  ? selectedAcronym + 1
                  : selectedAcronym),
                (messageClass = ''),
                (userDefinition = ''),
                (message = '')
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import acronyms from '../data/acronyms.json';

const shuffledAcronyms = acronyms.sort(() => Math.random() - 0.5);

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
    acronyms: shuffledAcronyms,
    selectedAcronym: 0,
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
  width: 600px;
  height: 300px;
  margin-top: -165px;
  margin-left: -315px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card.error {
  background-color: lightcoral;
}

.card.correct {
  background-color: mediumspringgreen;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
}

.nav-buttons > div {
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
