import { SubVisual } from '.';
import intro_bg from '@public/images/intro_bg.jpg';

export default {
  title: 'common/SubVisual',
  component: SubVisual,
  args: {
    // default인데 control이 안되서 넣어놓음
    title: '타이틀 부분 입니다.',
  }
};

const Template = (args) => <SubVisual {...args} />;

export const Default = Template.bind({});

export const FillContent = Template.bind({});
FillContent.args = {
  title: '회사 소개',
  bg: intro_bg,
};