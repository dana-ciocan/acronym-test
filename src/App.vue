<script setup lang="ts">
import SpecialButton from './components/SpecialButton/SpecialButton.vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import VictoryScreen from './components/VictoryScreen/VictoryScreen.vue';
import ExpansionDisplay from './components/ExpansionDisplay/ExpansionDisplay.vue';
</script>

<template>
  <div class="test-container" v-if="selectedAcronym < acronyms.length">
    <AppHeader
      :numAcronym="selectedAcronym + 1"
      :totalAcronyms="acronyms.length"
      :curAcronym="acronyms[selectedAcronym].acronym"
    />
    <div
      class="answer-input"
      v-if="correctAnswers[selectedAcronym] === undefined"
    >
      <textarea ref="answer" @keyup.enter="checkAnswer" />
      <SpecialButton @click="checkAnswer">Check answer</SpecialButton>
    </div>
    <div
      class="expansion-display-container"
      v-if="correctAnswers[selectedAcronym] !== undefined"
    >
      <ExpansionDisplay
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
      <SpecialButton @click="checkAnswer">Next acronym</SpecialButton>
    </div>
  </div>
  <VictoryScreen
    v-if="selectedAcronym === acronyms.length"
    :numCorrectAnswers="
      correctAnswers.filter((answer) => answer === true).length
    "
    :totalAcronyms="acronyms.length"
    @clear-game="clearGame"
  />
</template>

<script lang="ts">
import availableAcronyms from './data/acronyms.json';
import { defineComponent } from 'vue';
import { Acronym } from './types/acronym';

const shuffleAcronyms = (acronyms: Acronym[]): Acronym[] => {
  return acronyms.sort(() => Math.random() - 0.5);
};

export default defineComponent({
  data: () => ({
    acronyms: shuffleAcronyms(availableAcronyms).slice(0, 5),
    correctAnswers: [] as Boolean[],
    selectedAcronym: 0,
  }),
  name: 'AWS Acronym checker',
  components: {},
  methods: {
    incrementAcronymNumber() {
      this.selectedAcronym++;
    },
    clearGame() {
      this.acronyms = shuffleAcronyms(availableAcronyms).slice(0, 5);
      this.correctAnswers = [] as Boolean[];
      this.selectedAcronym = 0;
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
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.test-container {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.expansion-display-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  width: 100%;
}

.answer-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

textarea {
  font-size: 3rem;
  height: 10rem;
  width: 100%;
}

@media screen and (min-width: 60rem) {
  body {
    background: rebeccapurple;
    justify-content: center;
  }

  #app {
    width: 80vw;
    min-height: 80vh;
    margin: 0 auto;
    background-color: white;
    border-radius: 3rem;
    padding: 3rem;
  }

  #app:has(.victory-container) {
    background-color: rebeccapurple;
  }

  .test-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  textarea {
    margin-bottom: 6rem;
    font-size: 2rem;
    width: 30rem;
    height: 10rem;
  }
}

@media screen and (min-width: 75rem) {
  #app {
    width: 80%;
    margin: 0 auto;
    min-height: 80vh;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }
}
</style>
