import Card from './Card.vue';

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Card },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<card v-bind="args" />',
});

export const Primary = Template.bind({});

// @ts-ignore Property does not exist (2339)
Primary.storyName = 'Card';
