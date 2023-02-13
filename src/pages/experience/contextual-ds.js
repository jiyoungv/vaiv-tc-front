import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RiRestartLine, RiArrowRightLine } from 'react-icons/ri';

import { SubTitle, SubSection, Tab, Flex, Text, Button, Textarea } from '@components/common';
import { SubLayout, LnbTarget } from '@components/layout';
import useInput from '@hooks/useInput';
import { scrollbarStyle } from '@styles/Mixin';
import { getAbsSummary, getExtSummary } from '@apis/summary';

const ExperienceDS = () => {
  /*===== 추출 요약 =====*/
  // 추출 요약 - 원문 내용
  const [extractOrigin, onChangeExtractOrigin, setExtractOrigin] = useInput('');

  // 추출 요약 - 요약하기 버튼 활성화
  const [disabledExtract, setDisabledExtract] = useState(true);

  // 추출 요약 - 로딩
  const [loadingExtract, setLoadingExtract] = useState(false);

  // 추출 요약 - 결과
  const [extractResult, setExtractResult] = useState('');

  // 추출 요약 - 예시 데이터 넣기
  const onExtractExample = useCallback(() => {
    setExtractOrigin('TODO: 추출 요약 예시 데이터 넣기');
   }, []);

  // 추출 요약 - 유효성 체크
  useEffect(() => {
    if (extractOrigin.length === 0) return;

    setDisabledExtract(false);

    return () => {
      setDisabledExtract(true);
    }
  }, [extractOrigin]);


  // 추출 요약 - 요약하기
  const onExtractSummary = useCallback(() => {
    setLoadingExtract(true);
    getExtSummary(
    {
      "topk": 1,
      "sort": "prob",
      "text": extractOrigin
    }
    ).then((res) => {setExtractResult(res); setLoadingExtract(false);})
    alert('TODO: 추출 요약하기');

    // 완료
    // setTimeout(() => {
    //   // setExtractResult(extractResult);
    //   setLoadingExtract(false);
    // }, 2000);
  }, [extractOrigin]);

  /*===== 생성 요약 =====*/
  // 생성 요약 - 원문 내용
  const [createOrigin, onChangeCreateOrigin, setCreateOrigin] = useInput('');

  // 생성 요약 - 요약하기 버튼 활성화
  const [disabledCreate, setDisabledCreate] = useState(true);

  // 생성 요약 - 로딩
  const [loadingCreate, setLoadingCreate] = useState(false);

  // 생성 요약 - 결과
  const [createResult, setCreateResult] = useState('');

  // 생성 요약 - 예시 데이터 넣기
  const onCreateExample = useCallback(() => {
    setCreateOrigin('TODO: 생성 요약 예시 데이터 넣기');
  }, []);

  // 생성 요약 - 유효성 체크
  useEffect(() => {
    if (createOrigin.length === 0) return;

    setDisabledCreate(false);

    return () => {
      setDisabledCreate(true);
    }
  }, [createOrigin]);

  // 생성 요약 - 요약하기
  const onCreateSummary = useCallback(() => {
    setLoadingCreate(true);
    getAbsSummary(
    {
      "text": createOrigin
    }
    ).then((res) => {setCreateResult(res); setLoadingCreate(false);})
    alert('TODO: 생성 요약하기');

    // 완료
    // setTimeout(() => {
    //   setCreateResult('TODO: 생성 요약 결과를 넣어주세요.');
    //   setLoadingCreate(false);
    // }, 2000);
  }, [createOrigin]);

  // 탭 handler
  const onChangeTab = useCallback((index) => {
    if (index === 0) { // 추출 요약
      setExtractOrigin(''); 
      setExtractResult('');
    }
    else { // 생성 요약
      setCreateOrigin(''); 
      setCreateResult('')
    }
  }, []);

  return (
    <SubLayout>
      <ExperienceDSStyle>
        <LnbTarget id="experience" text="Contextual DS 체험하기" fontSize="small">
          <SubTitle title="Contextual DS 체험하기" text="요약하고 싶은 내용을 입력하시면, Contextual DS가 핵심 내용만을 요약해줍니다." />
        </LnbTarget>
        <SubSection mg="0">
          <Tab 
            onChange={onChangeTab}
            item={[
              {
                label: '추출 요약',
                content: <>
                  <Flex className="experience-wrap" justifyContent="space-between">
                    <div className="experience-box">
                      <Flex justifyContent="space-between" mg="0 0 10px">
                        <Text color="grey700" bold>원문 내용</Text>
                        <Button size="small" onClick={onExtractExample}>예시 데이터 넣기</Button>
                      </Flex>
                      <Textarea className="textarea" value={extractOrigin} onChange={onChangeExtractOrigin} minRows={8} maxRows={8} width="100%" placeholder="요약하고 싶은 내용을 입력하세요." fontSize="middle" />
                      <Flex className="button-group">
                        <Button className="button-refresh" variant="soft" color="grey500" width="135px" onClick={() =>{setExtractOrigin(''); setExtractResult('');}}>
                          <RiRestartLine />
                        </Button>
                        <Button className="button-action" variant="fill" width="340px" onClick={onExtractSummary} loading={loadingExtract} disabled={disabledExtract}>
                          요약하기
                        </Button>
                      </Flex>
                    </div>
                    <Flex alignItems="center" pd="30px 0 0">
                      <RiArrowRightLine className="experience-arrow" size={24} />
                    </Flex>
                    <div className="experience-box">
                      <Text color="grey700" mg="0 0 14px" bold>추출요약 결과</Text>
                      <div className="result">
                        <Text size="middle" color="grey800">
                          {extractResult}
                        </Text>
                      </div>
                    </div>
                  </Flex>
                </>,
              },
              {
                label: '생성 요약',
                content: <>
                  <Flex className="experience-wrap" justifyContent="space-between">
                    <div className="experience-box">
                      <Flex justifyContent="space-between" mg="0 0 10px">
                        <Text color="grey700" bold>원문 내용</Text>
                        <Button size="small" onClick={onCreateExample}>예시 데이터 넣기</Button>
                      </Flex>
                      <Textarea className="textarea" value={createOrigin} onChange={onChangeCreateOrigin} minRows={8} maxRows={8} width="100%" placeholder="요약하고 싶은 내용을 입력하세요." fontSize="middle" />
                      <Flex className="button-group">
                        <Button className="button-refresh" variant="soft" color="grey500" width="135px" onClick={() => {setCreateOrigin(''); setCreateResult('')}}>
                          <RiRestartLine />
                        </Button>
                        <Button className="button-action" variant="fill" width="340px" onClick={onCreateSummary} loading={loadingCreate} disabled={disabledCreate}>
                          요약하기
                        </Button>
                      </Flex>
                    </div>
                    <Flex alignItems="center" pd="30px 0 0">
                      <RiArrowRightLine className="experience-arrow" size={24} />
                    </Flex>
                    <div className="experience-box">
                      <Text color="grey700" mg="0 0 14px" bold>생성요약 결과</Text>
                      <div className="result">
                        <Text size="middle" color="grey800">
                          {createResult}
                        </Text>
                      </div>
                    </div>
                  </Flex>
                </>,
              }
            ]}
            gutter={27}      
          />
        </SubSection>
      </ExperienceDSStyle>
    </SubLayout>
  );
};

const ExperienceDSStyle = styled.div`
  .experience-box {
    flex-shrink: 0;
    width: 475px;

    .textarea {
      display: block;
      padding: 19px;
      border-radius: var(--radius2) var(--radius2) 0 0;
    }
    
    .button-group {
      border: 1px solid var(--grey300);
      border-top: 0;
      border-radius: 0 0 var(--radius2) var(--radius2);
    }

    .button-refresh {
      border-radius: 0 0 0 var(--radius2);
    }

    .button-action {
      border-radius: 0 0 var(--radius2) 0;
    }

    .result {
      overflow-y: auto;
      height: calc(272px + 50px);
      border: 1px solid var(--grey300);
      border-radius: var(--radius2);
      padding: 19px;
      ${scrollbarStyle()}
    }
  }

  .experience-arrow {
    color: var(--grey600);
  }
`;

export default ExperienceDS;