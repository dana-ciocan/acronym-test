import Progress from './Progress.vue';

type Arguments = {
  percentage: number;
};

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    percentage: Number,
  },
};

const Template = (args: Arguments) => ({
  components: { Progress },
  setup() {
    return { args };
  },
  template: '<Progress v-bind="args" />',
});

export const Primary = Template.bind({ percentage: 50 });

// @ts-ignore Property does not exist (2339)
Primary.storyName = 'Progress';
