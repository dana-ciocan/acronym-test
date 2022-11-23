<template>
  <div class="testContainer" v-if="selectedAcronym < acronyms.length">
    <h2>
      Acronym {{ selectedAcronym + 1 }}/{{ acronyms.length }}:
      {{ acronyms[selectedAcronym].acronym }}
    </h2>
    <p>What does this acronym stand for?</p>
    <div class="answerInput">
      <input
        type="text"
        ref="answer"
        :disabled="correctAnswers[selectedAcronym] !== undefined"
        @keyup.enter="checkAnswer"
      />
    </div>
    <div class="navigationButtons">
      <button
        @click="checkAnswer"
        v-if="correctAnswers[selectedAcronym] === undefined"
      >
        Check answer
      </button>
      <button
        @click="incrementAcronymNumber"
        v-if="correctAnswers[selectedAcronym] !== undefined"
      >
        Next acronym >>
      </button>
    </div>
    <div
      class="expansionDisplay"
      v-if="correctAnswers[selectedAcronym] !== undefined"
      :class="
        correctAnswers[selectedAcronym] === true
          ? 'correctAnswer'
          : 'incorrectAnswer'
      "
    >
      <p v-if="correctAnswers[selectedAcronym] === true">
        You got it right!
      </p>
      <p v-if="correctAnswers[selectedAcronym] === false">
        You got it wrong :(
      </p>
      <p v-if="correctAnswers[selectedAcronym] !== undefined">
        {{ acronyms[selectedAcronym].acronym }} =
        {{ acronyms[selectedAcronym].expansion }}
      </p>
      <p v-if="correctAnswers[selectedAcronym] !== undefined">
        {{ acronyms[selectedAcronym].definition }}
      </p>
    </div>
  </div>
  <div class="resultContainer" v-if="selectedAcronym === acronyms.length">
    <p>The test is complete!</p>
    <p>
      You scored
      {{ correctAnswers.filter(answer => answer === true).length }} out of
      {{ acronyms.length }}
    </p>
  </div>
</template>

<script lang="ts">
console.log('is this running?');
import acronyms from './data/acronyms.json';
import { defineComponent } from 'vue';
import { Acronym } from './types/acronym';

const shuffledAcronyms: Acronym[] = acronyms
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

export default defineComponent({
  data: () => ({
    userDefinition: '',
    message: '',
    acronyms: shuffledAcronyms,
    correctAnswers: [] as Boolean[],
    selectedAcronym: 0,
    messageClass: '',
    percentageComplete: 0,
  }),
  name: 'App',
  components: {},
  methods: {
    incrementAcronymNumber() {
      const answerElement: any = this.$refs.answer;
      this.selectedAcronym++;
      answerElement.disabled = false;
      answerElement.value = '';
      answerElement.focus();
    },
    checkAnswer() {
      const answerElement: any = this.$refs.answer;
      this.correctAnswers[this.selectedAcronym] =
        answerElement.value.toLowerCase() ===
        acronyms[this.selectedAcronym].expansion.toLowerCase();
    },
  },
});
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100%;
}

.testContainer {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

h2 {
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

.expansionDisplay {
  padding: 1rem;
  margin-top: 1rem;
}

.expansionDisplay.correctAnswer {
  background-color: palegreen;
  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0.25rem darkgreen;
}

.expansionDisplay.incorrectAnswer {
  background-color: lightpink;
  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0.25rem darkred;
}

.expansionDisplay > p {
  margin-top: 0;
}

.navigationButtons {
  margin-top: 2em;
}

.navigationButtons button {
  background-color: purple; /* Green */
  border: none;
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
  width: 15rem;
}

input[type='text'] {
  font-size: 3rem;
  width: 100%;
}

@media screen and (min-width: 960px) {
  #app {
    width: 90%;
    margin: 0 auto;
  }

  input[type='text'] {
    font-size: 2rem;
    width: 75%;
  }
}

@media screen and (min-width: 1200px) {
  #app {
    width: 75%;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }

  .navigationButtons button {
    font-size: 1rem;
  }

  input[type='text'] {
    font-size: 1.5rem;
    width: 30rem;
  }
}
</style>
