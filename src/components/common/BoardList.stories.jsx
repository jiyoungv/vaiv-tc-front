import { BoardList } from '.';
import { tempNoticeData } from '@utils/tempData';

export default {
  title: 'common/BoardList',
  component: BoardList,
};

const Template = (args) => <BoardList {...args} />;

export const Data = Template.bind({});
Data.args = {
  data: tempNoticeData,
};

export const NoData = Template.bind({});