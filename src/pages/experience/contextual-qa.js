import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { SubSection, InputText, Button, SubTitle, Text, Flex } from '@components/common';
import { SubLayout, LnbTarget, AnswerAccordion } from '@components/layout';
import useInput from '@hooks/useInput';
import { tempFaqListData, tempQAAnswerData, tempQAAnswerData2 } from '@utils/tempData';
import Variable from '@styles/Variable';
import { getAnswer } from '@apis/qa';

const ExperienceQA = () => {
  // 질문 input
  const [question, onChangeQuestion, setQuestion] = useInput('');

  // 질문 input focus 여부
  const [focusQuestion, setFocusQuestion] = useState(false);

  // 질문 disabled
  const [disabledQuestion, setDisabledQuestion] = useState(true);

  // 질문 loading
  const [loadingQuestion, setLoadingQuestion] = useState(false);

  // 대답 open
  const [openAnswer, setOpenAnswer] = useState(false);

  // 대답
  const [answerData, setAnswerData] = useState([]);

  // 자주하는 질문 클릭 여부
  const [clickFAQ, setClickFAQ] = useState(false);
  
  // 자주하는 질문 클릭
  const onClickFAQ = useCallback((question) => {
    setQuestion(question);
    setClickFAQ(true);
  }, []);

  // 유효성 체크
  useEffect(() => {
    if (question.length === 0) return;

    setDisabledQuestion(false);

    return () => {
      setDisabledQuestion(true);
    }
  }, [question]);

  // 질문하기 submit
  const onSubmitQustion = useCallback(() => {
    if (disabledQuestion) return; 
    
    alert(`TODO: ${question} 대답하기`);
    setLoadingQuestion(true);
    getAnswer(
      {
        "question": question, 
        "pr_size": 50, 
        "mrc_size": 50, 
        "model": "hybrid_mrc_fusion",
        "domain": "ko_finance_v2",
        "start_date": "2022-10-05",
        "end_date": "2023-01-03"
      }
    ).then((res) => setAnswerData(res?.results));

    // 성공
    setTimeout(() => {
      setOpenAnswer(true);
      setLoadingQuestion(false);
    }, 2000);
  }, [question]);

  // 질문하기 click
  const onClickQuestion = useCallback(() => {
    onSubmitQustion();
  }, [onSubmitQustion]);

  // 질문하기 enter
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        onSubmitQustion();
      }
    }

    if (focusQuestion) {
      document.addEventListener('keydown', handler);
    }

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, [onSubmitQustion, focusQuestion]);

  // 자주하는 질문 search
  useEffect(() => {
    if (clickFAQ) {
      onSubmitQustion();
      setClickFAQ(false);
    }
  }, [onSubmitQustion, clickFAQ]);

  // 정렬
  const [sort, setSort] = useState(0);

  const onClickSort = useCallback((sort) => {
    alert(`TODO: ${sort} 정렬`);
    setSort(sort);
  }, []);

  const sortScore = (answerData) => {
    const sortedData = answerData?.sort((a, b) => {
      return new Date(a.pr_score) - new Date(b.pr_score);
    }).reverse();
      return sortedData;
  }

  const sortDate = (answerData) => {
    const sortedData = answerData?.sort((a, b) => {
      return new Date(a.create_date).getTime() - new Date(b.create_date).getTime();
    }).reverse();
      return sortedData;
  }

  return (
    <SubLayout>
      <ExperienceQAStyle>
        <LnbTarget id="experience" text="Contextual QA 체험하기" fontSize="small">
          <SubTitle title="Contextual QA 체험하기" text="궁금하신 질문을 입력하시면, Contextual QA가 원하는 답을 찾아줍니다." />
        </LnbTarget>
        <SubSection mg="0">
          <Flex className="search">
            <InputText 
              className="search-input" 
              value={question} 
              onChange={onChangeQuestion} 
              onFocus={() => setFocusQuestion(true)} 
              onBlur={() => setFocusQuestion(false)} 
              width="100%" 
              fontSize="middle" 
              placeholder="원하는 질문을 입력하세요." 
            />
            <Button 
              className="search-button" 
              variant="fill" 
              width="185px" 
              fontSize="middle" 
              onClick={onClickQuestion} 
              disabled={disabledQuestion}
              loading={loadingQuestion}
            >
              질문하기
            </Button>
          </Flex>
        </SubSection>
        {!openAnswer && (
          <SubSection className="faq" mg="35px 0 0">
            <div className="faq-box">
              <Text size="large" color="grey700" mg="0 0 30px" bold>자주하는 질문</Text>
              <Flex className="faq-list" as="ul" wrap="wrap" justifyContent="center" gap="10px">
                {tempFaqListData?.map((v, i) => (
                  <li key={i} onClick={() => onClickFAQ(v)}>
                    <Text size="small" bold>{v}</Text>
                  </li>
                ))}
              </Flex>
            </div>
            <Flex justifyContent="flex-end" mg="10px 0 0">
              <Text size="xsmall" color="grey600">* 바이브의 QA는 생활, 문화에 대한 뉴스 데이터를 학습했습니다.</Text>
            </Flex>
          </SubSection>
        )}
        {openAnswer && (
          <SubSection mg="40px 0 0">
            <Flex className="sort" as="ul" justifyContent="flex-end" alignItems="center" gap="30px" mg="0 0 10px">
              <li className={sort === 0 ? 'active' : ''} onClick={() => onClickSort(0)}>
                <Text size="xsmall" color="grey600">관련도순</Text>
              </li>
              <li className={sort === 1 ? 'active' : ''} onClick={() => onClickSort(1)}>
                <Text size="xsmall" color="grey600">최신순</Text>
              </li>
            </Flex>
            <AnswerAccordion data={sort === 0 ? sortScore(answerData)?.slice(0,5) : sortDate(answerData)?.slice(0,5)} />
          </SubSection>
        )}
      </ExperienceQAStyle>
    </SubLayout>
  );
};

const ExperienceQAStyle = styled.div`
  .search {
    &-input {
      border-radius: var(--radius2) 0 0 var(--radius2);
    }

    &-button {
      flex-shrink: 0;
      border-color: var(--grey300);
      border-radius: 0 var(--radius2) var(--radius2) 0;
    }
  }

  .faq {
    &-box {
      padding: 30px 20px;
      border-radius: var(--radius2);
      background: var(--grey100);
      text-align: center;
    }
  
    &-list {
      max-width: 700px;
      margin: 0 auto;
  
      > li {
        padding: 4px 9px;
        border: 1px solid var(--primary);
        border-radius: 50px;
        color: var(--primary);
        transition: all 0.2s;
        cursor: pointer;
  
        &:hover {
          background: var(--primary);
          color: var(--white);
          box-shadow: 0px 6px 14px ${rgba('#000', 0.1)}, 10px 9px 10px 3px ${rgba(Variable.primary, 0.1)};
        }
      }
    }
  }

  .sort {
    > li {
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 15px;
        background: var(--grey300);
      }

      &:last-child {
        &::after {
          display: none;
        }
      }

      &.active {
        color: var(--grey700);
        font-weight: 700;
      }
    }
  }
`;

export default ExperienceQA;