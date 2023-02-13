import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { RiArrowUpLine } from 'react-icons/ri';

import { Text, Flex, InputText } from '@components/common';
import useInput from '@hooks/useInput';
import { scrollbarStyle } from '@styles/Mixin';
import experience_ca_bot from '@public/images/experience_ca_bot.png';

const Chatbot = ({ ...props }) => {
  // 질문 input
  const [question, onChangeQuestion, setQuestion] = useInput('');

  // 질문 input focus 여부
  const [focusQuestion, setFocusQuestion] = useState(false);

  // 대답하기
  const onAnswer = useCallback(() => {
    if (question.length === 0) return alert('내용을 입력해주세요.');
    alert(`TODO: ${question} 대답하기`);
    setQuestion('');
  }, [question]);

  // 질문하기 click
  const onClickQuestion = useCallback(() => {
    onAnswer();
  }, [onAnswer]);

  // 질문하기 enter
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        onAnswer();
      }
    }

    if (focusQuestion) {
      document.addEventListener('keydown', handler);
    }

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, [onAnswer, focusQuestion]);

  return (
    <ChatbotStyle {...props}>
      <div className="chatbot-header">
        <Text color="grey900" pd="15px 0" bold>금융 AI 어시스턴트</Text>
      </div>
      <div className="chatbot-body">
        <div className="chatbot-aiv">
          <div className="chatbot-name">
            <Text size="small" color="grey900" bold>AIV</Text>
          </div>
          <div className="chatbot-message">
            <Text size="small" color="grey700">
              안녕하세요? 저는 <em>금융 AI 어시스턴트 AIV</em>입니다. <br/>
              경제, 금융, 주식 관련해서 무엇이든 물어보세요. <br/>
              AI검색의 경우 현재 언어모델이 대/소문자를 구분 학습했으므로 영문은 대/소문자를 구분하는 것이 정확률을 높여줍니다.
            </Text>
          </div>
          <div className="chatbot-message">
            <Text size="small" color="grey700">
              반도체 관련 중요 뉴스를 볼까요? <br/>
              <b>‘반도체 관련 뉴스’</b>라고 입력해보세요.
            </Text>
          </div>
        </div>
      </div>
      <Flex className="chatbot-question" alignItems="center" gap="15px" pd="15.5px 20px">
        <InputText 
          className="input" 
          value={question} 
          onChange={onChangeQuestion} 
          onFocus={() => setFocusQuestion(true)} 
          onBlur={() => setFocusQuestion(false)} 
          placeholder="궁금한 내용을 물어보세요!" 
          width="750px" 
          fontSize="middle"
        />
        <button className="button" type="button" onClick={onClickQuestion}>
          <RiArrowUpLine size={24} />
        </button>
      </Flex>
    </ChatbotStyle>
  );
};

const ChatbotStyle = styled.article`
  border-radius: 20px 20px 0 0;
  background: var(--white);
  box-shadow: 0px 0px 36px ${rgba('#000', 0.1)};

  .chatbot {
    &-header {
      text-align: center;
    }
  
    &-body {
      ${scrollbarStyle()}
      overflow-y: auto;
      height: 395px;
      padding: 20px 20px 0;
    }
  
    &-aiv {
      padding-left: calc(48px + 15px);
    }
  
    &-name {
      position: relative;
      margin-bottom: 5px;
  
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: -15px;
        top: 0;
        transform: translateX(-100%);
        width: 48px;
        height: 48px;
        background: url(${experience_ca_bot.src}) center/100% no-repeat;
      }
    }
  
    &-message {
      max-width: 510px;
      margin-bottom: 10px;
      padding: 11px;
      border: 1px solid var(--grey300);
      border-radius: 0 15px 15px 15px;
    }
  
    &-question {
      background: var(--grey100);
  
      .input {
        padding: 4px 19px;
        border-radius: 50px;
      }
  
      .button {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary);
        color: var(--white);
        transition: background 0.2s;

        &:hover {
          background: var(--primary-dark1);
        }
      }
    }
  }
`;

export default Chatbot;