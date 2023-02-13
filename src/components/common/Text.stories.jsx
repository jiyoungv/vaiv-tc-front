import { Text } from '.';
import { colorVariable, textSizeVariable } from '@styles/Variable';

export default {
  title: 'common/Text',
  component: Text,
  args: {
    children: '시간이 지나 돌이켜보면, 결코 제자리가 아니다. Do not try to be original, just try to be good.',
  },
  argTypes: {
    color: { 
      control: { 
        type: 'select', 
        options: colorVariable,
      } 
    },
    size: { 
      control: { 
        type: 'select', 
        options: textSizeVariable,
      } 
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Middle = Template.bind({});
Middle.args = {
  size: 'middle',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: 'xsmall',
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
};

export const Color = Template.bind({});
Color.args = {
  color: 'primary',
};

export const Margin = Template.bind({});
Margin.args = {
  mg: '50px',
};

export const Padding = Template.bind({});
Padding.args = {
  pd: '100px',
};