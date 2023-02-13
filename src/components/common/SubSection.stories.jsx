import { SubSection, Title } from '.';

export default {
  title: 'common/SubSection',
  component: SubSection,
  args: {
    children: <>
      <Title level={5} bold>서브 섹션</Title>
      <div>
        서브 컨텐츠 안에 나뉘어진 섹션입니다. <br />
        마진 값이 정해져있고 수정 필요 시 props mg를 지정하면 됩니다.
      </div>
    </>
  }
};

const Template = (args) => (
  <>
    <SubSection {...args} />
    <SubSection {...args} />
    <SubSection {...args} />
  </>
);

export const Default = Template.bind({});

export const Margin = Template.bind({});
Margin.args = {
  mg: '0 0 20px',
};