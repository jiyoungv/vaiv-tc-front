import { Tab } from '.';

export default {
  title: 'common/Tab',
  component: Tab,
  args: {
    item: [
      {
        label: '추출 요약',
        content: <div>추출 요약에 대한 설명입니다.</div>,
      },
      {
        label: '생성 요약',
        content: <div>생성 요약에 대한 설명입니다.</div>,
      },
    ],
    onChange: (index) => alert(`activeIndex: ${index}`),
  }
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});

export const Gutter = Template.bind({});
Gutter.args = {
  gutter: 150,
};