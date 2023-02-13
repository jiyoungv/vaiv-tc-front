import styled from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';
import Image from 'next/image';

import { Title, SubTitle, SubSection, Text, Flex, VennDiagramList, Button } from '@components/common';
import { SubLayout, LnbTarget, Contact } from '@components/layout';
import intro_ds_merit_icon1 from '@public/images/intro_ds_merit_icon1.png';
import intro_ds_merit_icon2 from '@public/images/intro_ds_merit_icon2.png';
import intro_ds_merit_icon3 from '@public/images/intro_ds_merit_icon3.png';
import intro_ds_merit_icon4 from '@public/images/intro_ds_merit_icon4.png';
import intro_ds_eg from '@public/images/intro_ds_eg.png';

const IntroDS = () => {
  return (
    <SubLayout>
      <IntroDSStyle>
        <SubTitle title="Contextual DS 란?" />
        <SubSection>
          <LnbTarget id="intro" text="솔루션 개요">
            <Title level={5} color="grey800" mg="0 0 20px" bold>솔루션 개요</Title>
          </LnbTarget>
          <Text size="middle" color="grey700" mg="0 0 40px">
            장문으로 구성된 문서로부터 핵심내용을 추출하여 1~3문장의 단 문으로 <b>핵심내용만 요약</b>해 제공합니다. <br/>
            문서 요약은 크게 <b>추출요약, 생성요약</b> 두가지 방법이 있습니다. <br/>
            새로운 문장을 생성해내는 생성요약이 기술적으로는 더 난이도가 있으며, 바이브컴퍼니는 두가지 요약 방법 모두 제공합니다.
          </Text>
          <Text size="large" color="primary" mg="0 0 20px" bold>추출요약 및 생성 요약의 차이</Text>
          <Flex justifyContent="space-between">
            <div className="intro-differ-box">
              <Text size="middle" color="grey700" mg="0 0 6px" bold>추출요약이란?</Text>
              <Text color="grey600">
                문서 내의 기존에 있는 문장의 중요도를 판별하여, <br/>
                중요도에 따라 1개부터 N개의 기존 문장을 추출.
              </Text>
            </div>
            <div className="intro-differ-box">
              <Text size="middle" color="grey700" mg="0 0 6px" bold>생성요약이란?</Text>
              <Text color="grey600">
                문서 내의 텍스트를 <br/>
                재구성 및 변환해 새로운 문장을 생성해 요약.
              </Text>
            </div>
          </Flex>
        </SubSection>
        <SubSection>
          <LnbTarget id="benefit" text="주요 특장점">
            <Title level={5} color="grey800" mg="0 0 30px" bold>주요 특장점</Title>
          </LnbTarget>
          <VennDiagramList 
            label="Contextual DS"
            list={[
              { 
                icon: intro_ds_merit_icon1.src,
                title: '국내 최고 기술력', 
                text: <>
                  400억 건 이상의 빅데이터 기반 <br/>
                  22년간 연구해온 자연어 처리 기술 <br/>
                  및 최신딥러닝 기술 적용
                </>,
              },
              { 
                icon: intro_ds_merit_icon2.src,
                title: '문서 요약 성능 1위', 
                text: <>
                  DACON 한국어 문서 추출 요약 <br/>
                  AI 경진대회<Text size="xsmall" inline>(비공식)</Text> 리더보드 <br/>
                  1, 2위 달성 <br/>
                  <Text size="xsmall" inline>*공식 리더보드 1위보다 <br/>
                  높은 정확도</Text>
                </>,
              },
              { 
                icon: intro_ds_merit_icon3.src,
                title: '빠른 응답 속도', 
                text: <>
                  1초도 걸리지 않는 문서 요약 속도 <br/>
                  <Text size="xsmall" inline>* 한국어 추출요약 CPU 기준 0.6초</Text>
                </>,
              },
              { 
                icon: intro_ds_merit_icon4.src,
                title: '영문 요약 기능 제공', 
                text: <>
                  한국어뿐만이 아닌 <br/>
                  영어로 된 문서도 요약 기능을 제공
                </>,
              }
            ]}
          />
        </SubSection>
        <SubSection>
          <LnbTarget id="eg" text="사용 예시">
            <Flex alignItems="center" gap="15px" mg="0 0 30px">
              <Title level={5} color="grey800" bold>사용 예시</Title>
              <Button href="/experience/contextual-ds" size="small">체험해보기<RiArrowRightSLine /></Button>
            </Flex>
          </LnbTarget>
          <Text className="dot-title" size="large" color="grey800" mg="0 0 9px" bold>뉴스요약</Text>
          <figure className="global-img100">
            <Image src={intro_ds_eg} alt="사용 예시" />
          </figure>
        </SubSection>
        <Contact />
      </IntroDSStyle>
    </SubLayout>
  );
};

const IntroDSStyle = styled.div`
  .intro-differ-box {
    flex-shrink: 0;
    width: 480px;
    padding: 25px 0 18px;
    border-radius: var(--radius2);
    background: var(--grey100);
    text-align: center;
  }

  .dot-title {
    position: relative;
    padding-left: 14px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--primary);
    }
  }
`;

export default IntroDS;