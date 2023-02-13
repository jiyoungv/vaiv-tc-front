import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Header, Footer } from '@components/layout';
import useWindowScroll from '@hooks/useWindowScroll';

const AppLayout = ({ children, ...props }) => {
  const router = useRouter();
  const windowScroll = useWindowScroll();

  // 메인 페이지 check (헤더 타입 다름, fixed)
  const isMainPage = useMemo(() => router.pathname === '/', [router]);

  // 마이 페이지 check (fixed)
  const isMyPage = useMemo(() => router.pathname.split('/')[1] === 'my', [router]);

  // 헤더 마우스오버 여부
  const [headerMouseOver, setHeaderMouseOver] = useState(false);

  // 헤더 타입
  const [headerType, setHeaderType] = useState(null);
  
  // 헤더 타입 effect
  useEffect(() => {
    if (isMainPage) {
      if (windowScroll.y > 0) {
        setHeaderType('dark');
      } else if (headerMouseOver) {
        setHeaderType('dark');
      }
    } else {
      setHeaderType('dark');
    }

    return () => {
      setHeaderType(null);
    }
  }, [isMainPage, headerMouseOver, windowScroll]);
  
  const urlHash = useMemo(() => {
    if (!router.asPath.includes('#')) return null;

    return router.asPath.split('#')[1];
  }, [router]);

  // 유입시 #id로 스크롤 이동
  useEffect(() => {
    document?.querySelector(`#${urlHash}`)?.scrollIntoView();
  }, [urlHash]);

  return (
    <AppLayoutStyle {...props}>
      <Header type={headerType} fixed={isMainPage || isMyPage ? true : false} onMouseOver={() => setHeaderMouseOver(true)} onMouseOut={() => setHeaderMouseOver(false)} />
      <div id="container">
        {children}
      </div>
      <Footer />
    </AppLayoutStyle>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

const AppLayoutStyle = styled.div`
  #container {
    min-height: calc(100vh - 208px);
  }
`;

export default AppLayout;