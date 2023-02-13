import { Title } from '.';
import { colorVariable } from '@styles/Variable';

export default {
  title: 'common/Title',
  component: Title,
  args: {
    children: '시간이 지나 돌이켜보면, 결코 제자리가 아니다. Do not try to be original, just try to be good'
  },
  argTypes: {
    color: { 
      control: { 
        type: "select", 
        options: colorVariable,
      } 
    },
  },
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

export const Level2 = Template.bind({});
Level2.args = {
  level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
  level: 3,
};

export const Level4 = Template.bind({});
Level4.args = {
  level: 4,
};

export const Level5 = Template.bind({});
Level5.args = {
  level: 5,
};

export const Level6 = Template.bind({});
Level6.args = {
  level: 6,
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