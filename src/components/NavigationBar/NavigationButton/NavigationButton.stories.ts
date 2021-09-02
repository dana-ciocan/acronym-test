import NavigationButton from './NavigationButton.vue';

type Arguments = {
  label: string;
};

export default {
  title: 'Navigation Button',
  component: NavigationButton,
};

const Template = (args: Arguments) => ({
  components: { NavigationButton },
  setup() {
    return { args };
  },
  template: '<NavigationButton v-bind="args" />',
});

export const Next = Template.bind({});
export const Previous = Template.bind({ label: 'Previous' });

// @ts-ignore Property does not exist (2339)
Next.args = { label: 'Next >>' };
// @ts-ignore Property does not exist (2339)
Previous.args = { label: '<< Previous' };
