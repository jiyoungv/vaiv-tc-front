import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Title, Text } from '@components/common';
import { codeStyle } from '@styles/Mixin';

const codeCustomStyle = {...codeStyle, fontSize: '14px'};

const Component = () => {
  return (
    <div>
      <section style={{ marginBottom: 50 }}>
        <Title level={5} mg="0 0 20px">1. 사용</Title>
        <Title level={6} mg="0 0 5px">1-1. Import</Title>
        <SyntaxHighlighter language="jsx" style={a11yDark} wrapLongLines={true} customStyle={codeCustomStyle}>
{`import { Text, Flex, Button } from '@components/common';
  
const Component = () => {
  return (
    <div>
      <Text>import 예시입니다.</Text>
      <Flex>
        <Button color="grey500">아니오</Button>
        <Button variant="fill">예</Button>
      </Flex>
    </div>
  ); 
}
`}
        </SyntaxHighlighter>
          <Title level={6} mg="10px 0 5px">1-2. Component Custom Style</Title>
          <Text>- component/common에 있는 모든 컴포넌트의 class는 'common-'으로 시작한다. 해당 class의 css를 직접 수정하면 된다.</Text>
          <SyntaxHighlighter language="jsx" style={a11yDark} wrapLongLines={true} customStyle={codeCustomStyle}>
          {`import styled from 'styled-components';

import { Button } from '@components/common';

const Component = () => {
  return (
    <ComponentStyle>
      <Button className="button">스타일 수정한 버튼<Button>
    </ComponentStyle>
  );
};

const ComponentStyle = styled.div
  ...

  .button {
    .common-button-text { // 이렇게 넣어서 수정
      color: var(--red);
    }
  }

  ...
`}
      </SyntaxHighlighter>
        </section>

        <section style={{ marginBottom: 50 }}>
          <Title level={5} mg="0 0 20px">2. 제작</Title>
          <Title level={6} mg="0 0 5px">2-1. Add Common Component</Title>
          <Text size="large" mg="0 0 5px">2-1-1. 컴포넌트 제작</Text>
          <Text>- component/common안에 '컴포넌트이름.jsx' 파일을 추가한다.</Text>
          <Text>- 항상 나머지 props 요소(...props)를 컴포넌트 최상위 요소에 넘겨준다.</Text>
          <Text>- custom하기 쉽게 html 요소마다 'common-component-'로 시작하는 class를 달아준다.</Text>
          <SyntaxHighlighter language="jsx" style={a11yDark} wrapLongLines={true} customStyle={codeCustomStyle}>
          {`// components/common/Button.jsx
...

const Button = ({ size, color, children, ...props }) => {
  return (
    <ButtonStyle {...props}>
      <span className="common-button-text">
        {children}
        <i className="common-button-icon">아이콘</i>
      </span>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button
  ...
  .common-button {
    &-text {
      font-size: var(--font-base);
    }

    &-icon {
      color: var(--red);
    }
  }
  ...
`}
        </SyntaxHighlighter>
          <Text size="large" mg="10px 0 5px">2-1-2. Export</Text>
          <Text mg="0 0 5px">- abc순으로 해당 파일에 아래처럼 export한다.</Text>
          <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines={true} customStyle={codeCustomStyle}>
{`// components/common/index.jsx
// abc 순
export { default as BoardList } from './BoardList';
export { default as BoardTitle } from './BoardTitle';
export { default as Button } from './Button';
export { default as Callout } from './Callout';
`}
          </SyntaxHighlighter>
        </section>
    </div>
  );
};

export default {
  title: 'Intro',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});