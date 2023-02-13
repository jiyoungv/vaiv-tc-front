import { InputRadio } from '.';

export default {
  title: 'common/InputRadio',
  component: InputRadio,
  args: {
    value: 'radio',
    name: 'radio-name',
  },
};

const Template = (args) => <InputRadio {...args} />;

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  children: '라벨은 자유롭게 children으로 넣어주세요',
};