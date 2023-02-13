import { InputText } from '.';
import { textSizeVariable } from '@styles/Variable';

export default {
  title: 'common/InputText',
  component: InputText,
  argTypes: {
    fontSize: { 
      control: { 
        type: 'select', 
        options: textSizeVariable,
      } 
    },
  },
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: '읽기 전용입니다.',
  readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '비활성화입니다.',
  disabled: true,
};

export const Width = Template.bind({});
Width.args = {
  width: '500px',
};

export const FontSize = Template.bind({});
FontSize.args = {
  fontSize: 'xsmall',
};