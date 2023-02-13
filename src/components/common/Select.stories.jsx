import { Select } from '.';

export default {
  title: 'common/Select',
  component: Select,
  args: {
    onChange: (value) => alert(`activeValue: ${value}`),
  }
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  option: [
    { value: 'all', label: '전체' },
    { value: 'name', label: '이름' },
    { value: 'content', label: '내용' },
  ],
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  ...Default.args,
  defaultValue: 'content',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  option: [
    { value: 'all', label: '전체' },
    { value: 'name', label: '이름', disabled: true },
    { value: 'content', label: '내용' },
  ],
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  theme: 'dark',
};

export const Width = Template.bind({});
Width.args = {
  ...Default.args,
  width: '500px',
};

export const Height = Template.bind({});
Height.args = {
  option: [
    { value: 'all', label: '전체' },
    { value: 'name', label: '이름', disabled: true },
    { value: 'content1', label: '내용1' },
    { value: 'content2', label: '내용2' },
    { value: 'content3', label: '내용3' },
    { value: 'content4', label: '내용4' },
    { value: 'content5', label: '내용5' },
  ],
  defaultValue: 'content5',
  height: '100px',
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  bold: true,
};