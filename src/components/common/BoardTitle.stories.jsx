import { BoardTitle } from '.';

export default {
  title: 'common/BoardTitle',
  component: BoardTitle,
};

const Template = (args) => <BoardTitle {...args} />;

export const Data = Template.bind({});
Data.args = {
  data: { 
    sort: 0, 
    url: '/notice/view/1',
    title: '타이틀 부분 입니다.',
    date: '2022-00-00',
  },
};

export const Link = Template.bind({});
Link.args = {
  ...Data.args,
  link: true,
};