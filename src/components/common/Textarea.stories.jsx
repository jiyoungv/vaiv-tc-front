import { Textarea } from '.';
import { textSizeVariable } from '@styles/Variable';

export default {
  title: 'common/Textarea',
  component: Textarea,
  argTypes: {
    fontSize: { 
      control: { 
        type: 'select', 
        options: textSizeVariable,
      } 
    },
  },
};

const Template = (args) => <Textarea {...args} />;

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

export const FontSize = Template.bind({});
FontSize.args = {
  fontSize: 'xsmall',
};

export const MaxRows = Template.bind({});
MaxRows.args = {
  maxRows: 5,
  value: '최대 높이 지정입니다. 최대 높이 지정입니다. 최대 높이 지정입니다. 최대 높이 지정입니다. 최대 높이 지정입니다. 최대 높이 지정입니다. 최대 높이 지정입니다.',
};

export const MinRows = Template.bind({});
MinRows.args = {
  minRows: 5,
  value: '최소 높이 지정입니다.',
};