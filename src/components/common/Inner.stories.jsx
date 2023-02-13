import { Inner } from '.';

export default {
  title: 'common/Inner',
  component: Inner,
};

const Template = (args) => <Inner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '컨텐츠 이너 1200px이고, 양옆 패딩 25px 고정입니다.',
};