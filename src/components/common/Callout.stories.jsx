import { Callout, Text } from '.';

export default {
  title: 'common/Callout',
  component: Callout,
  args: {
    list: [
      '솔루션별 비용이 상이하므로 자세한 요금은 솔루션별 요금을 확인해야 합니다.',
      <>Docker 기반 설치형 솔루션은 2023년 3월 제공될 예정입니다. <Text size="xsmall" color="grey500" inline>(일정은 변경될 수 있습니다.)</Text></>,
      'In-House 구축을 원할 경우 문의하기를 통해 별도 협의가 필요합니다.',
    ],
  },
};

const Template = (args) => <Callout {...args} />;

export const List = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  title: '안내사항',
};

export const Custom = Template.bind({});
Custom.args = {
  children: '내용을 자유롭게 넣으려면 children으로 넣으세요.'
};