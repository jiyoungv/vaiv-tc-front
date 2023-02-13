import styled from 'styled-components';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

import { Title, SubTitle, SubSection, Text, VennDiagramList, Flex, Button } from '@components/common';
import { SubLayout, LnbTarget, Contact } from '@components/layout';
import intro_qa_info from '@public/images/intro_qa_info.png';
import intro_qa_merit_icon1 from '@public/images/intro_qa_merit_icon1.png';
import intro_qa_merit_icon2 from '@public/images/intro_qa_merit_icon2.png';
import intro_qa_merit_icon3 from '@public/images/intro_qa_merit_icon3.png';
import intro_qa_merit_icon4 from '@public/images/intro_qa_merit_icon4.png';
import intro_qa_eg1 from '@public/images/intro_qa_eg1.png';
import intro_qa_eg2 from '@public/images/intro_qa_eg2.png';

const IntroQA = () => {
  return (
    <SubLayout>
      <IntroQAStyle>
        <SubTitle title="Contextual QA 란?" />
        <SubSection>
          <LnbTarget id="intro" text="솔루션 개요">
            <Title level={5} color="grey800" mg="0 0 20px" bold>솔루션 개요</Title>
          </LnbTarget>
          <Text size="middle" color="grey700" mg="0 0 40px">
            유저가 검색한 내용을 이해하고 <b>원하는 답</b>을 찾아줍니다. <br/>
            QA란 현재 검색엔진으로 많이 이용되는 키워드 기반의 단순 검색을 넘어, <b>검색엔진의 단점을 보완한 차세대 솔루션</b>으로 기대받는 기술입니다.
          </Text>
          <figure className="global-img100">
            <Image src={intro_qa_info} alt="" />
          </figure>
        </SubSection>
        <SubSection>
          <LnbTarget id="benefit" text="주요 특장점">
            <Title level={5} color="grey800" mg="0 0 30px" bold>주요 특장점</Title>
          </LnbTarget>
          <VennDiagramList 
            label="Contextual QA"
            list={[
              { 
                icon: intro_qa_merit_icon1.src,
                title: '질문의 답을 찾아서 제공', 
                text: <>
                  질의에 대한 답을 찾을 뿐만 아니라 <br/>
                  답변을 포함하는 문장 및 주변 문장을 <br/>
                  함께 보여줌으로써 손쉽게 <br/>
                  답을 확인 가능
                </>,
              },
              { 
                icon: intro_qa_merit_icon2.src,
                title: <>
                  학습 신청을 통한 <br/>
                  정확도 향상 가능
                </>, 
                text: <>
                  사용자가 원하는 데이터를 학습시켜 <br/>
                  정확도 향상 가능
                </>,
              },
              { 
                icon: intro_qa_merit_icon3.src,
                title: '정답 확률 90%', 
                text: <>
                  상위 3개의 답변 중 <br/>
                  질의에 대한 답이 있을 확률 90%
                </>,
              },
              { 
                icon: intro_qa_merit_icon4.src,
                title: '영문 요약 기능 제공', 
                text: <>
                  한국어뿐만이 아닌 <br/>
                  영어로 된 질의에 대한 답변 제공
                </>,
              }
            ]}
          />
        </SubSection>
        <SubSection>
          <LnbTarget id="eg" text="사용 예시">
            <Flex alignItems="center" gap="15px" mg="0 0 30px">
              <Title level={5} color="grey800" bold>사용 예시</Title>
              <Button href="/experience/contextual-qa" size="small">체험해보기<RiArrowRightSLine /></Button>
            </Flex>
          </LnbTarget>
          <Text className="dot-title" size="large" color="grey800" mg="0 0 20px" bold>산업 분야 주요 뉴스 검색</Text>
          <figure className="global-img100">
            <Image src={intro_qa_eg1} alt="사용 예시" />
          </figure>
          <Text className="dot-title" size="large" color="grey800" mg="50px 0 20px" bold>사업보고서 검색</Text>
          <figure className="global-img100">
            <Image src={intro_qa_eg2} alt="사용 예시" />
          </figure>
        </SubSection>
        <Contact />
      </IntroQAStyle>
    </SubLayout>
  );
};

const IntroQAStyle = styled.div`
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

export default IntroQA;