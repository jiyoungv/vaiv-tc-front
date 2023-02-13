import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';

import { Title, Text, SubTitle, SubSection, Flex, Button } from '@components/common';
import { SubLayout, LnbTarget } from '@components/layout';
import intro_tv_business from '@public/images/intro_tv_business.jpg';
import intro_tv_solution1 from '@public/images/intro_tv_solution1.png';
import intro_tv_solution2 from '@public/images/intro_tv_solution2.png';
import intro_tv_solution3 from '@public/images/intro_tv_solution3.png';
import intro_tv_experience from '@public/images/intro_tv_experience.jpg';

const IntroTechVridge = () => {
  return (
    <SubLayout>
      <IntroTechVridgeStyle>
        <SubTitle title="Tech Vridge, 기업과 기술을 잇다.">
          <Text size="large" color="grey700" mg="20px 0 0" bold>
            국내 최초·최대 인공지능·빅데이터 전문기업 바이브컴퍼니는 2000년에 설립되어 <br/>
            20년이 넘도록 인공지능·빅데이터 기술을 개발해 왔습니다.
          </Text>
        </SubTitle>
        <SubSection mg="0 0 102px">
          <LnbTarget id="business" text="비지니스 소개">
            <Title level={5} color="grey800" mg="0 0 20px" bold>비지니스 소개</Title>
          </LnbTarget>
          <div>
            <figure className="global-img100">
              <Image src={intro_tv_business} alt="" />
            </figure>
            <Text size="middle" color="grey800" mg="20px 0 0"><b>Tech Vridge</b>는 국내 최고의 인공지능 기술을 보유한 바이브컴퍼니가 개발한 솔루션을 체험하고, 쉽게 이용할 수 있도록 지원하는 서비스 입니다.</Text>
          </div>
        </SubSection>
        <SubSection>
          <LnbTarget id="solution" text="솔루션 소개">
            <Title level={5} color="grey800" mg="0 0 30px" bold>솔루션 소개</Title>
          </LnbTarget>
          <ul className="solution-list">
            <Flex as="li" alignItems="stretch" gap="25px" mg="0 0 60px">
              <Flex className="list-text" direction="column" justifyContent="space-between" alignItems="flex-start">
                <div>
                  <Flex className="list-number" justifyContent="center" alignItems="center" mg="0 0 5px" inline>
                    <Text size="middle" color="grey700" bold>01</Text>
                  </Flex>
                  <Title level={6} color="primary" mg="0 0 5px" bold>Contextual DS</Title>
                  <Text color="grey800" mg="0 0 25px" bold>문서의 핵심 내용을 파악해 요약해줍니다.</Text>
                  <Text size="small">
                    장문으로 구성된 문서로부터 핵심내용을 추출하여 1~3문장의 단문으로 <br/>
                    <b>핵심내용만 요약</b>해 제공합니다. <br/>
                    읽어야하는 문서가 증가하고 있는 사회에서 <b>Contextual DS</b>를 이용해 <br/>
                    요약된 내용만을 확인해 빠르게 핵심을 파악하고 인사이트를 <br/>
                    얻을 수 있습니다.
                  </Text>
                </div>
                <Link className="list-link" href="/intro/contextual-ds" title="Contextual DS 자세히 보기">
                  <Text color="grey500" bold>
                    <Flex as="span" alignItems="center" gap="10px" ilnine>
                      자세히보기
                      <span className="list-icon-arrow">
                        <RiArrowDropRightLine size={24} />
                      </span>
                    </Flex>
                  </Text>
                </Link>
              </Flex>              
              <figure className="global-img100 list-image">
                <Image src={intro_tv_solution1} alt="" />
              </figure>
            </Flex>
            <Flex as="li" alignItems="stretch" gap="25px" mg="0 0 60px">
              <Flex className="list-text" direction="column" justifyContent="space-between" alignItems="flex-start">
                <div>
                  <Flex className="list-number" justifyContent="center" alignItems="center" mg="0 0 5px" inline>
                    <Text size="middle" color="grey700" bold>02</Text>
                  </Flex>
                  <Title level={6} color="primary" mg="0 0 5px" bold>Contextual QA</Title>
                  <Text color="grey800" mg="0 0 22px" bold>단순 검색이 아닌 질문의 내용을 이해해 질문자가 원하는 답을 찾아줍니다.</Text>
                  <ul className="list-qna">
                    <li>
                      <div className="qna-q">
                        <Text size="small" color="grey700" bold>메타버스의 시장 전망은?</Text>
                      </div>
                    </li>
                    <li>
                      <div className="qna-a">
                        <Text size="small" color="grey700" bold>
                          딜로이트는 글로벌 메타버스 <br/>
                          2025년 2448억~3928억 달러<Text size="xsmall" inline>(341조~555조 원)</Text> <br/>
                          규모로 성장할 것이라 전망했다.
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link className="list-link" href="/intro/contextual-qa" title="Contextual QA 자세히 보기">
                  <Text color="grey500" bold>
                    <Flex as="span" alignItems="center" gap="10px" ilnine>
                      자세히보기
                      <span className="list-icon-arrow">
                        <RiArrowDropRightLine size={24} />
                      </span>
                    </Flex>
                  </Text>
                </Link>
              </Flex>              
              <figure className="global-img100 list-image">
                <Image src={intro_tv_solution2} alt="" />
              </figure>
            </Flex>
            <Flex as="li" alignItems="stretch" gap="25px">
              <Flex className="list-text" direction="column" justifyContent="space-between" alignItems="flex-start">
                <div>
                  <Flex className="list-number" justifyContent="center" alignItems="center" mg="0 0 5px" inline>
                    <Text size="middle" color="grey700" bold>03</Text>
                  </Flex>
                  <Title level={6} color="primary" mg="0 0 5px" bold>Contextual CA</Title>
                  <Text color="grey800" mg="0 0 22px" bold>
                    단순 질의응답부터 전문 상담까지 24 X 365 깨어있는 <br/>
                    당신의 비즈니스
                  </Text>
                  <Text size="small" color="grey700" mg="0 0 10px">
                    정확한 질문 의도뿐만 아니라 혼합 주도형 쌍방향 대화로, <br/>
                    현존하는 챗봇 중 <b>가장 스마트한 인공지능 기반 대화 솔루션</b>입니다.
                  </Text>
                  <Text size="small" color="grey700">
                    ① 국내 최초 개발, 15년 이상 상용화로 검증된 쌍방향 대화 기술 <br/>
                    ② 100% 자체 기술력, 성능∙안정성이 보장된 솔루션 <br/>
                    ③ 인공지능 전문 고급 개발자 X, 전문 지식 구축 및 관리 인력 <br/>
                    ④ 성능 인증, 상용화를 통한 우월한 비교 경쟁 우위
                  </Text>
                </div>
                <Link className="list-link" href="/intro/contextual-ca" title="Contextual CA 자세히 보기">
                  <Text color="grey500" bold>
                    <Flex as="span" alignItems="center" gap="10px" ilnine>
                      자세히보기
                      <span className="list-icon-arrow">
                        <RiArrowDropRightLine size={24} />
                      </span>
                    </Flex>
                  </Text>
                </Link>
              </Flex>              
              <figure className="global-img100 list-image">
                <Image src={intro_tv_solution3} alt="" />
              </figure>
            </Flex>
          </ul>
        </SubSection>        
        <div className="experience-banner">
          <Text size="large" color="white" mg="0 0 20px" bold>
            이용해보고 싶은 솔루션이 있다면 <br/>
            지금 바로 만나보세요.
          </Text>
          <Button variant="fill" width="190px" href="/experience/contextual-ds" title="체험해보기" fontSize="small">체험해보기</Button>
        </div>
      </IntroTechVridgeStyle>
    </SubLayout>
  );
};

const IntroTechVridgeStyle = styled.div`
  .solution-list {
    .list-text {
      flex-shrink: 0;
      width: 430px;
    }

    .list-image {
    }

    .list-number {
      width: 39px;
      height: 39px;
      border-radius: 50%;
      background: var(--grey200);
    }

    .list-link {
      &:hover {
        .list-icon-arrow {
          margin-left: 7px;
        }    
      }
    }

    .list-icon-arrow {
      position: relative;
      width: 22px;
      height: 22px;
      border: 1.5px solid currentColor;
      border-radius: 50%;
      transition: margin 0.2s;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .list-qna {
      > li {
        margin-bottom: 10px;
        
        &:last-child {
          margin-bottom: 0;
        }

        &:after {
          content: '';
          display: block;
          clear: both;
        }
      }

      .qna-q, .qna-a {
        display: inline-block;
        position: relative;
        border-radius: 20px;

        &:before {
          position: absolute;
          font-size: var(--font-small);
          font-weight: 700;
        }
      }

      .qna-q {
        padding: 3px 9px;
        padding-left: calc(9px + 18px);
        border: 1px solid var(--grey300);
        border-bottom-left-radius: 0;
        background: var(--grey200);

        &:before {
          content: 'Q.';
          top: 6px;
          left: 10px;
          color: var(--grey700);
        }
      }

      .qna-a {
        float: right;
        padding: 9px 36px;
        padding-left: calc(16px + 18px);
        border: 1px solid var(--primary);
        border-bottom-right-radius: 0;

        &:before {
          content: 'A.';
          top: 12px;
          left: 16px;
          color: var(--primary);
        }
      }
    }
  }

  .experience-banner {
    padding: 30px 0 28px;
    border-radius: var(--radius2);
    background: url(${intro_tv_experience.src}) center/cover no-repeat;
    text-align: center;
  }
`;

export default IntroTechVridge;