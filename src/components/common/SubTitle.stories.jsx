import { SubTitle, Text } from '.';

export default {
  title: 'common/SubTitle',
  component: SubTitle,
};

const Template = (args) => <SubTitle {...args} />;

export const Default = Template.bind({});

export const AddText = Template.bind({});
AddText.args = {
  text: '텍스트 부분입니다. 스타일이 정해져있습니다.',
};

export const Margin = Template.bind({});
Margin.args = {
  mg: '0 0 100px',
};

export const Custom = Template.bind({});
Custom.args = {
  children: <Text size="large" bold>다른 모양의 텍스트를 넣고 싶다면 children으로 넣어주세요.</Text>,
};