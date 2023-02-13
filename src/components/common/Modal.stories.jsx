import { Modal } from '.';

export default {
  title: 'common/Modal',
  component: Modal,
  args: {
    onClose: () => alert('모달을 닫는 함수를 넣어주세요'),
  },
};

const Template = (args) => <Modal {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: '타이틀입니다',
};

export const Text = Template.bind({});
Text.args = {
  text: <>텍스트입니다<br/> 텍스트입니다</>,
};

export const TitleAndText = Template.bind({});
TitleAndText.args = {
  title: '타이틀입니다',
  text: <>텍스트입니다<br/> 텍스트입니다</>,
};

export const OneButton = Template.bind({});
OneButton.args = {
  title: '버튼 1개 모달',
  text: '버튼 1개는 button props에 객체를 넣어주세요',
  button: {
    label: '확인',
    handler: () => alert('확인')
  }
};

export const TwoButton = Template.bind({});
TwoButton.args = {
  title: '버튼 2개 모달',
  text: '버튼 2개는 button props에 객체의 배열을 넣어주세요',
  button: [
    { 
      label: '취소',
      handler: () => alert('취소'),
    },
    {
      label: '확인',
      handler: () => alert('확인'),
    }
  ],
};

export const OtherColorButton = Template.bind({});
OtherColorButton.args = {
  text: '버튼의 색상을 바꿀 수도 있어요',
  button: [
    { 
      label: '취소',
      handler: () => alert('취소'),
      color: 'yellow',
    },
    {
      label: '확인',
      handler: () => alert('확인'),
      color: 'red',
    }
  ],
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  text: '버튼 로딩 중...',
  button: {
    label: '확인',
    handler: () => alert('확인'),
    loading: true,
  },
};

export const Custom = Template.bind({});
Custom.args = {
  title: '내용 추가 모달',
  text: '이 텍스트는 스타일이 정해져있어요',
  children: '자유롭게 무언가를 넣고 싶으면 children으로 넣고 css로 꾸며주세요',
  button: [
    { 
      label: '나갈래요',
      handler: () => alert('나갈래요')
    },
    {
      label: '진행할게요',
      handler: () => alert('진행할게요'),
    }
  ],
};