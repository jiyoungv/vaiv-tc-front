import { RiAddLine } from 'react-icons/ri';

import { Button } from '.';
import { buttonColorVariable, textSizeVariable } from '@styles/Variable';

export default {
  title: 'common/Button',
  component: Button,
  args: {
    children: '더보기',
  },
  argTypes: {
    color: { 
      control: { 
        type: "select", 
        options: buttonColorVariable,
      } 
    },
    fontSize: { 
      control: { 
        type: "select", 
        options: textSizeVariable,
      } 
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('클릭!'),  
};

export const Fill = Template.bind({});
Fill.args = {
  ...Default.args,
  variant: 'fill',
};

export const Soft = Template.bind({});
Soft.args = {
  ...Default.args,
  variant: 'soft',
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  variant: 'soft',
  color: 'green',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  children: <>더보기<RiAddLine /></>,
};

export const Link = Template.bind({});
Link.args = {
  href: 'http://www.vaiv.kr/',
  target: '_blank',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Width = Template.bind({});
Width.args = {
  ...Default.args,
  width: '190px',
};

export const Margin = Template.bind({});
Margin.args = {
  ...Default.args,
  mg: '100px',
};

export const FontSize = Template.bind({});
FontSize.args = {
  ...Default.args,
  fontSize: 'xsmall',
};
