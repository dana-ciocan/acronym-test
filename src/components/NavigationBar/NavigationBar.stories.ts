import NavigationBar from './NavigationBar.vue';

type Arguments = {
  totalAcronyms: number;
};

export default {
  title: 'Navigation Bar',
  component: NavigationBar,
  argTypes: {
    totalAcronyms: Number,
  },
};

const Template = (args: Arguments) => ({
  components: { NavigationBar },
  setup() {
    return { args };
  },
  template: '<NavigationBar v-bind="args" />',
});

export const Primary = Template.bind({ totalAcronyms: 10 });

// @ts-ignore Property does not exist (2339)
Primary.storyName = 'Navigation Bar';
