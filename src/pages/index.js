import { useEffect, useRef, useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RiArrowDropRightLine, RiAddLine } from 'react-icons/ri';

import { Title, Text, Inner, Flex, Button, BoardList } from '@components/common';
import { AppLayout, ScrollDownIcon } from '@components/layout';
import main_visual from '@public/images/main_visual.jpg';
import main_info1 from '@public/images/main_info1.jpg';
import main_info2 from '@public/images/main_info2.jpg';
import main_client from '@public/images/main_client.png';
import { tempNoticeData } from '@utils/tempData';
import useWindowScroll from '@hooks/useWindowScroll';
// import { getExtSummary, getAbsSummary } from '@apis/summary';
// import { getAnswer } from '@apis/qa';

// 비주얼 ani speed (단위: s)
const visualScrollSpeed = 0.7;

const Main = () => {
  const router = useRouter();
  const windowScroll = useWindowScroll();
  const visualRef = useRef();
  const infoRef = useRef();

  // mouse wheel direction
  const [mouseWheelDirection, setMouseWheelDirection] = useState(null); // 초기값 꼭 null이어야함
  useEffect(() => {
    const handler = (e) => {
      const deltaY = e.deltaY || e.detail;
      setMouseWheelDirection(deltaY > 0 ? 'down' : 'up');
    };
    window.addEventListener('mousewheel', handler);
    window.addEventListener('DOMMouseScroll', handler); // firefox

    return () => {
      window.removeEventListener('mousewheel', handler);
      window.removeEventListener('DOMMouseScroll', handler); // firefox
    }
  }, []);

  // 초기 로딩시 scroll 비노출, scroll 최상단으로
  const isMainPage = useMemo(() => router.pathname === '/', [router]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { 
    if (!isMainPage && isMounted) return;

    window.scrollTo({ top: 0 });
    document.body.classList.add('no-scroll');
    setIsMounted(true);

    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, [isMainPage, isMounted]);

  // 현재 비주얼 영역인지 여부
  const [isCurretVisual, setIsCurretVisual] = useState(true);

  // 비주얼 scroll ani
  useEffect(() => {
    if (isCurretVisual && mouseWheelDirection === 'down') { // 비주얼 -> 하단 내용
      visualRef.current.classList.add('hide');
      infoRef.current.classList.add('show');
      setIsCurretVisual(false);
      window.scrollTo({ top: 1, behavior: 'smooth' }); // header mode 변경을 위해 넣음
      
      setTimeout(() => { // 비주얼 넘어간 후 scroll visible 되게
        document.body.classList.remove('no-scroll');
      }, visualScrollSpeed * 1000 - 100);
    } else if (!isCurretVisual && mouseWheelDirection === 'up' && windowScroll.y < 5) { // 하단 내용 -> 비주얼
      visualRef.current.classList.remove('hide');
      infoRef.current.classList.remove('show');
      document.body.classList.add('no-scroll');
      setIsCurretVisual(true);
      window.scrollTo({ top: 0 });
    }
  }, [windowScroll.y, mouseWheelDirection, isCurretVisual]);

  // const [data, setData] = useState([]);
  // useEffect(() =>{
  //   getAnswer().then((res) => console.log('res', res))
  // }, []);

  return (
    <AppLayout>
      <MainStyle>
        <section className="visual" ref={visualRef}>
          <Inner>
            <Flex justifyContent="center" alignItems="center">
              <div className="visual-content">
                <Title className="visual-title" bold>
                  Tech <em>V</em>ridge, <br/>
                  기업과 기술을 잇다.
                </Title>
                <Text className="visual-text" color="grey200" size="large" bold>국내 최초・최대 인공지능 빅데이터 전문 기업 바이브컴퍼니가 차별화 된 기술을 제공합니다.</Text>
              </div>
            </Flex>
            <ScrollDownIcon className="visual-scroll" />
          </Inner>
        </section>
        <section className="info" ref={infoRef}>
          <Inner>
            <div className="main-title">
              <Title className="title" level={2} bold>Connect Business and Tech with VAIV<em>.</em></Title>
              <Text className="text" size="large">
                <b>Tech Vridge</b>는 국내 최고의 인공지능 기술을 보유한 바이브컴퍼니가 개발한 솔루션을 체험하고, <br/>
                쉽게 이용할 수 있도록 제공하는 공간입니다.
              </Text>
            </div>
            <Flex className="info-list" as="ul" justifyContent="space-between">
              <li>
                <Link href="/intro/tech-vridge" title="솔루션 소개">
                  <Flex className="list-content" direction="column" justifyContent="space-between">
                    <div className="list-top">
                      <Text className="text1" bold>Solution</Text>
                      <Title className="text2" level={3} bold>솔루션 소개</Title>
                      <Text className="text3" size="large"><b>Tech Vridge</b>만의 인공지능 핵심 기술을 소개합니다.</Text>
                    </div>
                    <Text className="list-bottom" bold>
                      <Flex className="list-bottom" as="span" alignItems="center" gap="10px" inline>
                        자세히보기 <RiArrowDropRightLine size={22} />
                      </Flex>
                    </Text>
                  </Flex>
                </Link>
              </li>
              <li>
                <Link href="/experience/contextual-ds" title="솔루션 체험">
                  <Flex className="list-content" direction="column" justifyContent="space-between">
                    <div className="list-top">
                      <Text className="text1" bold>Experience</Text>
                      <Title className="text2" level={3} bold>솔루션 체험</Title>
                      <Text className="text3" size="large">
                        검색엔진, 빅데이터 분석, 인공지능 솔루션을 <br />
                        체험해보세요.
                      </Text>
                    </div>
                    <Text className="list-bottom" bold>
                      <Flex className="list-bottom" as="span" alignItems="center" gap="10px" inline>
                        자세히보기 <RiArrowDropRightLine size={22} />
                      </Flex>
                    </Text>
                  </Flex>
                </Link>
              </li>
            </Flex>
          </Inner>
        </section>
        <section className="notice">
          <Inner>
            <div className="main-title">
              <Title className="title" level={2} bold>공지사항<em>.</em></Title>
            </div>
            <BoardList data={tempNoticeData?.slice(0, 5)} />
            {tempNoticeData?.length > 0 && (
              <Flex className="notice-button" justifyContent="center">
                <Button href="/notice/list" title="더보기">더보기<RiAddLine /></Button>
              </Flex>
            )}
          </Inner>
        </section>
        <section className="client">
          <Inner>
            <div className="main-title">
              <Title className="title" level={2} bold>주요 고객사<em>.</em></Title>
              <Text className="text" size="large"><b>바이브컴퍼니</b>는 다양한 산업군의 고객사와 함께합니다.</Text>
            </div>
            <figure className="global-img100">
              <Image src={main_client} alt="고객사 이미지" />
            </figure>
          </Inner>
        </section>
      </MainStyle>
    </AppLayout>
  );
};

const visualAni = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainStyle = styled.div`
  .main-title {
    text-align: center;

    .title {
      margin-bottom: 30px;
      color: var(--grey900);

      em {
        color: var(--primary);
      }
    }

    .text {
      color: var(--grey700);
    }
  }

  .visual {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(${main_visual.src}) center/cover no-repeat;
    transition: all calc(${visualScrollSpeed} * 1s);

    &.hide {
      top: -100vh;
    }

    &-content {
      text-align: center;
    }

    &-title {
      margin-bottom: 61px;
      color: var(--white);
      opacity: 0;
      animation: ${visualAni} 1s forwards;
      animation-delay: 0.2s;

      em {
        color: var(--primary);
      }
    }

    &-text {
      opacity: 0;
      animation: ${visualAni} 1s forwards;
      animation-delay: 0.7s;
    }

    &-scroll {
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .info {
    position: relative;
    margin-top: 100vh;
    padding: 130px 0 137px;
    background: var(--grey100);
    transition: margin calc(${visualScrollSpeed} * 1s);

    &.show {
      margin-top: 0;
    }

    .main-title {
      margin-bottom: 130px;
    }

    &-list {
      > li {
        width: 550px;
        height: 400px;
        border-radius: 0px 30px;
        background: center/cover no-repeat;
        transition: transform 0.3s;

        &:hover {
          transform: translateY(-30px);
        }

        &:nth-child(1) {
          background-image: url(${main_info1.src});
        }

        &:nth-child(2) {
          background-image: url(${main_info2.src});
        }

        > a {
          display: block;
          height: inherit;
        }

        .list-content {
          padding: 40px 40px 38px;
        }
      }

      .list-top {
        .text1 {
          color: var(--primary);
        }

        .text2 {
          margin-bottom: 20px;
          color: var(--white);
        }

        .text3 {
          color: var(--white);
        }
      }

      .list-bottom {
        color: var(--grey200);

        svg {
          border: 2px solid var(--grey200);
          border-radius: 50%;
        }
      }
    }
  }

  .notice {
    padding: 129px 0 147px;

    .main-title {
      margin-bottom: 130px;
    }

    .notice-button {
      margin-top: 20px;
    }
  }

  .client {
    padding: 100px 0 109px;
    background: var(--grey100);

    .main-title {
      margin-bottom: 120px;
    }
  }
`;

export default Main;