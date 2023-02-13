import { Flex } from '.';

export default {
  title: 'common/Flex',
  component: Flex,
  args: {
    children: <>
      <div style={{ width: '50px', height: '50px', background: 'pink' }}>1</div>
      <div style={{ width: '100px', height: '100px', background: 'yellowgreen' }}>2</div>
    </>,
  },
};

const Template = (args) => <Flex {...args} />;

export const Default = Template.bind({});

export const Direction = Template.bind({});
Direction.args = {
  direction: 'column',
};

export const JustifyContent = Template.bind({});
JustifyContent.args = {
  justifyContent: 'space-between',
};

export const AlignItems = Template.bind({});
AlignItems.args = {
  alignItems: 'center',
};

export const Gap = Template.bind({});
Gap.args = {
  gap: '40px',
};

export const Margin = Template.bind({});
Margin.args = {
  mg: '25px 50px',
};

export const Padding = Template.bind({});
Padding.args = {
  pd: '50px 100px',
};