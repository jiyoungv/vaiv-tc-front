import styled from 'styled-components';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

import { Title, SubTitle, SubSection, Text, VennDiagramList, Flex, Button } from '@components/common';
import { SubLayout, LnbTarget, Contact } from '@components/layout';
import intro_ca_info1 from '@public/images/intro_ca_info1.png';
import intro_ca_info2 from '@public/images/intro_ca_info2.png';
import intro_ca_info3 from '@public/images/intro_ca_info3.png';
import intro_ca_merit_icon1 from '@public/images/intro_ca_merit_icon1.png';
import intro_ca_merit_icon2 from '@public/images/intro_ca_merit_icon2.png';
import intro_ca_merit_icon3 from '@public/images/intro_ca_merit_icon3.png';
import intro_ca_merit_icon4 from '@public/images/intro_ca_merit_icon4.png';
import intro_ca_merit_icon5 from '@public/images/intro_ca_merit_icon5.png';
import intro_ca_merit_icon6 from '@public/images/intro_ca_merit_icon6.png';
import intro_ca_eg from '@public/images/intro_ca_eg.jpg';

const IntroCA = () => {
  return (
    <SubLayout>
      <IntroCAStyle>
        <SubTitle title="Contextual CA 란?" />
        <SubSection>
          <LnbTarget id="intro" text="솔루션 개요">
            <Title level={5} color="grey800" mg="0 0 20px" bold>솔루션 개요</Title>
          </LnbTarget>
          <div className="info-section">
            <Text size="middle" color="grey700">
              정확한 질문 의도 뿐만 아니라 쌍방향 대화를 통해 고객 맞춤형 정보를 빠르고 정확하게 전달하는 <b>바이브컴퍼니의 스마트한 <br/>
              인공지능 챗봇 솔루션</b>입니다.
            </Text>
            <figure className="global-img100">
              <Image src={intro_ca_info1} alt="" />
            </figure>
          </div>
          <div className="info-section">
            <Text className="dot-title" size="large" color="grey800" mg="0 0 25px" bold>필요성</Text>
            <figure className="global-img100">
              <Image src={intro_ca_info2} alt="필요성" />
            </figure>
          </div>
          <div className="info-section">
            <Text className="dot-title" size="large" color="grey800" mg="0 0 25px" bold>솔루션 구성</Text>
            <figure className="global-img100">
              <Image src={intro_ca_info3} alt="솔루션 구성" />
            </figure>
          </div>
        </SubSection>
        <SubSection>
          <LnbTarget id="benefit" text="주요 특장점">
            <Title level={5} color="grey800" mg="0 0 30px" bold>주요 특장점</Title>
          </LnbTarget>
          <VennDiagramList 
            label="Contextual CA"
            list={[
              { 
                icon: intro_ca_merit_icon1.src,
                title: '국내 최초 AI 챗봇', 
                text: <>
                  사용자와의 쌍방향 대화를 <br/>
                  핵심으로 한 AI 챗봇을 국내 최초로 개발 <br/>
                  <Text size="xsmall" inline>
                    * GS 1등급 인증, 2018 대한민국 <br/>
                    소프트웨이 기술대상 수상
                  </Text>
                </>,
              },
              { 
                icon: intro_ca_merit_icon2.src,
                title: '자연스러운 대화 경험', 
                text: <>
                  바이브컴퍼니만의 대화 기술이 <br/>
                  적용되어 기계처럼 딱딱한 대화가 <br/>
                  아닌 사람처럼 자연스러운 <br/>
                  대화 경험을 제공
                </>,
              },
              { 
                icon: intro_ca_merit_icon3.src,
                title: '사용자의 의도를 파악', 
                text: <>
                  22년간 연구해온 국내 최고의 자연어 <br/>
                  처리 기술을 적용해 사용자 질의에서 <br/>
                  의도를 파악하고 원하는 답을 제공
                </>,
              },
              { 
                icon: intro_ca_merit_icon4.src,
                title: '대화 관리 도구 제공', 
                text: <>
                  단순한 문장 입력 과정을 통해 <br/>
                  간단한 문답부터 복잡한 시나리오 <br/>
                  설계까지 가능한 대화관리 <br/>
                  도구를 제공
                </>,
              },
              { 
                icon: intro_ca_merit_icon5.src,
                title: '학습을 통한 챗봇 성능 향상', 
                text: <>
                  하이브리드 학습 방법으로 <br/>
                  매일 업데이트 되는 대화지식 및 <br/>
                  로그를 학습시켜 <br/>
                  챗봇 성능 지속 향상
                </>,
              },
              { 
                icon: intro_ca_merit_icon6.src,
                title: <>
                  하나의 챗봇으로 다양한 <br/>
                  디지털 고객 경험 제공
                </>, 
                text: <>
                  하나의 엔진으로 어떤 플랫폼에도 <br/>
                  연동이 가능 <Text size="xsmall" inline> (SNS/메신저, <br/>
                  PC/모바일, AI스피커)</Text>
                </>,
              }
            ]}
          />
        </SubSection>
        <SubSection>
          <LnbTarget id="eg" text="사용 예시">
          <Flex alignItems="center" gap="15px" mg="0 0 30px">
            <Title level={5} color="grey800" bold>사용 예시</Title>
            <Button href="/experience/contextual-ca" size="small">체험해보기<RiArrowRightSLine /></Button>
          </Flex>
          </LnbTarget>
          <Flex alignItems="center" gap="8px" mg="0 0 20px">
            <Text className="dot-title" size="large" color="grey800" bold>바이브의 금융 AI 챗봇</Text>
            <Text color="grey600">경제, 금융, 주식 관련해서 궁금하신 질문을 입력하시면, 원하는 답을 찾아줍니다.</Text>
          </Flex>
          <figure className="global-img100">
            <Image src={intro_ca_eg} alt="사용 예시" />
          </figure>
        </SubSection>
        <Contact />
      </IntroCAStyle>
    </SubLayout>
  );
};

const IntroCAStyle = styled.div`
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

  .info-section {
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default IntroCA;