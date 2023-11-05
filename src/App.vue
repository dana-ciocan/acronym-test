<script setup lang="ts">
import SpecialButton from './components/SpecialButton/SpecialButton.vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import VictoryScreen from './components/VictoryScreen/VictoryScreen.vue';
import ExpansionDisplay from './components/ExpansionDisplay/ExpansionDisplay.vue';
</script>

<template>
  <div class="testContainer" v-if="selectedAcronym < acronyms.length">
    <AppHeader
      :numAcronym="selectedAcronym + 1"
      :totalAcronyms="acronyms.length"
      :curAcronym="acronyms[selectedAcronym].acronym"
    />
    <div class="answerInput">
      <input
        type="text"
        ref="answer"
        :disabled="correctAnswers[selectedAcronym] !== undefined"
        @keyup.enter="checkAnswer"
      />
    </div>
    <div class="navigationButtons">
      <SpecialButton @click="checkAnswer">
        {{
          correctAnswers[selectedAcronym] === undefined
            ? 'Check answer'
            : 'Next acronym >>'
        }}
      </SpecialButton>
    </div>
    <ExpansionDisplay
      v-if="correctAnswers[selectedAcronym] !== undefined"
      :isAnswerCorrect="correctAnswers[selectedAcronym] === true"
      :definition="acronyms[selectedAcronym].definition"
      :expansion="acronyms[selectedAcronym].expansions[0]"
    >
      {{
        correctAnswers[selectedAcronym] === true
          ? 'You got it right 🎉'
          : 'You got it wrong 😭'
      }}
    </ExpansionDisplay>
  </div>
  <VictoryScreen
    v-if="selectedAcronym === acronyms.length"
    :numCorrectAnswers="
      correctAnswers.filter((answer) => answer === true).length
    "
    :totalAcronyms="acronyms.length"
  />
</template>

<script lang="ts">
import availableAcronyms from './data/acronyms.json';
import { defineComponent } from 'vue';
import { Acronym } from './types/acronym';

const shuffledAcronyms: Acronym[] = availableAcronyms.sort(
  () => Math.random() - 0.5,
);

export default defineComponent({
  data: () => ({
    userDefinition: '',
    message: '',
    acronyms: shuffledAcronyms.slice(0, 5),
    correctAnswers: [] as Boolean[],
    selectedAcronym: 0,
    messageClass: '',
    percentageComplete: 0,
  }),
  name: 'AWS Acronym checker',
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
      if (this.correctAnswers[this.selectedAcronym] === undefined) {
        const answerElement: any = this.$refs.answer;
        const lowercaseExpansions = this.acronyms[
          this.selectedAcronym
        ].expansions.map((expansion) => {
          return expansion.toLowerCase();
        });
        this.correctAnswers[this.selectedAcronym] =
          lowercaseExpansions.includes(
            answerElement.value.toLowerCase().trim(),
          );
      } else {
        this.incrementAcronymNumber();
      }
    },
  },
});
</script>

<style>
body {
  margin: 0;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  width: 100%;
}

.testContainer {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

.navigationButtons {
  margin-top: 2em;
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

  input[type='text'] {
    font-size: 1.5rem;
    width: 30rem;
  }
}
</style>
