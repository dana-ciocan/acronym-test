<template>
  <Progress
    :currentAcronym="selectedAcronym"
    :totalAcronyms="acronyms.length"
  />
  <Card
    :acronym="
      selectedAcronym < acronyms.length ? acronyms[selectedAcronym].acronym : ''
    "
    :expansion="
      selectedAcronym < acronyms.length
        ? acronyms[selectedAcronym].expansion
        : ''
    "
    :numAcronyms="acronyms.length"
  />
  <NavigationBar
    :currentAcronym="selectedAcronym"
    :totalAcronyms="acronyms.length"
    @update-acronym-number="doSomething"
  />
</template>

<script lang="ts">
import Card from './components/Card/Card.vue';
import Progress from './components/Progress/Progress.vue';
import NavigationBar from './components/NavigationBar/NavigationBar.vue';
import acronyms from './data/acronyms.json';
import { defineComponent } from 'vue';

type Acronym = {
  acronym: string;
  expansion: string;
  definition: string;
};

const shuffledAcronyms: Acronym[] = acronyms.sort(() => Math.random() - 0.5);

export default defineComponent({
  data: () => ({
    userDefinition: '',
    message: '',
    acronyms: shuffledAcronyms,
    selectedAcronym: 0,
    messageClass: '',
  }),
  name: 'App',
  components: {
    Card,
    Progress,
    NavigationBar,
  },
  methods: {
    doSomething(acronymNumber: number) {
      this.selectedAcronym = acronymNumber;
    },
  },
});
</script>

<style>
body {
  background-color: #ccc;
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
