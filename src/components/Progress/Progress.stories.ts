import Progress from './Progress.vue';

type Arguments = {
  currentAcronym: number;
  totalAcronyms: number;
};

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    currentAcronym: Number,
    totalAcronyms: Number,
  },
};

const Template = (args: Arguments) => ({
  components: { Progress },
  setup() {
    return { args };
  },
  template: '<Progress v-bind="args" />',
});

export const Primary = Template.bind({ currentAcronym: 0, totalAcronyms: 10 });
