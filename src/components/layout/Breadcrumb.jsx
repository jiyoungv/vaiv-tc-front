import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RiHome2Line, RiArrowDropDownLine } from 'react-icons/ri';
import { rgba } from 'polished';
import Link from 'next/link';

import { Flex, Inner, Text } from '@components/common';
import { subSitemap } from '@utils/sitemap';
import usePathInfo from '@hooks/usePathInfo';
import useWindowScroll from '@hooks/useWindowScroll';

const Breadcrumb = ({ ...props }) => {
  const breadcrumbRef = useRef(null);
  const dropbox1Ref = useRef(null);
  const dropbox2Ref = useRef(null);
  const pathInfo = usePathInfo();
  const windowScroll = useWindowScroll();

  const isDepth1Active = useCallback((depth1) => {
    return depth1 === pathInfo.depth1;
  }, [pathInfo]);
  
  const isDepth2Active = useCallback((depth2) => {
    return depth2 === pathInfo.depth2;
  }, [pathInfo]);

  const currentDepth2 = useMemo(() => subSitemap?.filter(v => v.en === pathInfo?.depth1)[0]?.depth2, [subSitemap, pathInfo]);

  // dropbox open 상태
  const [openDropbox1, setOpenDropbox1] = useState(false);
  const [openDropbox2, setOpenDropbox2] = useState(false);

  // dropbox1 토글 핸들러
  const onToggleDropbox1 = useCallback(() => {
    setOpenDropbox2(false);
    setOpenDropbox1(prev => !prev);
  }, []);

  // dropbox2 토글 핸들러
  const onToggleDropbox2 = useCallback(() => {
    setOpenDropbox1(false);
    setOpenDropbox2(prev => !prev);
  }, []);

  // dropbox1 외부 영역 클릭 핸들러
  const onClickDropbox1Outside = useCallback((e) => {
    if (openDropbox1 && !dropbox1Ref.current.contains(e.target)) setOpenDropbox1(false);
  }, [openDropbox1, dropbox1Ref]);

  // dropbox2 외부 영역 클릭 핸들러
  const onClickDropbox2Outside = useCallback((e) => {
    if (openDropbox2 && !dropbox2Ref.current.contains(e.target)) setOpenDropbox2(false);
  }, [openDropbox2, dropbox2Ref]);

  // dropbox 외부 영역 클릭시 닫기
  useEffect(() => {
    if (openDropbox1) document.addEventListener('mousedown', onClickDropbox1Outside);
    if (openDropbox2) document.addEventListener('mousedown', onClickDropbox2Outside);

    return () => {
      document.removeEventListener('mousedown', onClickDropbox1Outside);
      document.removeEventListener('mousedown', onClickDropbox2Outside);
    }
  }, [openDropbox1, openDropbox2]);

  // fixed 상태
  const [fixed, setFixed] = useState(false);

  // fixed 포인트
  const breadcrumbOffsetTop = 340;

  // 스크롤시 fixed
  useEffect(() => {
    if (!fixed && windowScroll.y >= breadcrumbOffsetTop) { // 포인트 이상
      setFixed(true);
    } else if (fixed && windowScroll.y < breadcrumbOffsetTop) { // 포인트 미만
      setFixed(false);
    }
  }, [fixed, windowScroll])

  return (
    <BreadcrumbStyle ref={breadcrumbRef} fixed={fixed} {...props}>
      <Inner>
        <Flex as="ul" alignItems="center" gap="35px">
          <li className="home">
            <Link className="link" href="/" title="home">
              <RiHome2Line size={24} />
            </Link>
          </li>
          <li className="depth depth1" ref={dropbox1Ref}>
            <Text className={`title ${currentDepth2?.length < 2 ? 'active' : ''}`} size="small" bold onClick={onToggleDropbox1}>
              <Flex alignItems="center" as="span" inline>
                {pathInfo?.depth1Name}
                <RiArrowDropDownLine className={openDropbox1 ? 'active' : ''} size={22} />
              </Flex>
            </Text>
            {openDropbox1 && 
              <ul className="dropbox">
                {subSitemap?.map((v, i) => (
                  <li key={v.en} className="item">
                    <Link className={`link ${isDepth1Active(v.en) ? 'active' : ''}`} href={`/${v.en}/${v.depth2[0].en}`} title={v.name}>
                      <Text size="small" bold>{v.kr}</Text>
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </li>
          {currentDepth2?.length > 1 && ( // depth2의 갯수가 2개 이상부터 보여짐
            <li className="depth depth2" ref={dropbox2Ref}>
              <Text className="title" size="small" bold onClick={onToggleDropbox2}>
                <Flex alignItems="center" as="span" inline>
                  {pathInfo?.depth2Name}
                  <RiArrowDropDownLine className={openDropbox2 ? 'active' : ''} size={22} />
                </Flex>
              </Text>
              {openDropbox2 &&
                <ul className="dropbox">
                  {currentDepth2?.map((v, i) => (
                    <li key={v.en} className="item">
                      <Link className={`link ${isDepth2Active(v.en) ? 'active' : ''}`} href={`/${pathInfo?.depth1}/${v.en}`} title={v.name}>
                        <Text size="small" bold>{v.kr}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            </li>
          )}
        </Flex>
      </Inner>
    </BreadcrumbStyle>
  );
};

Breadcrumb.propTypes = {
  depth1: PropTypes.string,
  depth2: PropTypes.string,
};

const localVariable = {
  opacity: 0.5,
};

const BreadcrumbStyle = styled.article`
  z-index: var(--zindex3);
  left: 0;
  width: 100%;
  padding: 18px 0;
  background: ${rgba('#000', 0.5)};
  backdrop-filter: blur(2.5px);

  ${({ fixed }) => fixed 
    ? `
      position: fixed;
      top: 0;
    ` 
    : `
      position: absolute;
      bottom: 0;
    `
  }
  
  .home {
    > .link {
      display: block;
      height: 24px;
      color: var(--white);
      opacity: ${localVariable.opacity};
    }
  }

  .depth {
    position: relative;

    > .title {
      color: var(--white);
      cursor: pointer;

      svg {
        transition: transform 0.2s;
        
        &.active {
          transform: rotate(-180deg);
        }
      }

      &.active {
        // color: var(--primary);
      }
    }
  }

  .depth1 {
    > .title {
      opacity: ${localVariable.opacity};

      &.active {
        // color: var(--primary);
        opacity: 1;
      }
    }
  }

  .depth2 {
    > .title {
      // color: var(--primary);
      color: var(--white);
    }
  }

  .dropbox {
    position: absolute;
    top: calc(100% + 18px + 5px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding: 20px;
    border-radius: var(--radius2);
    background: ${rgba('#111', 0.9)};

    > .item {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }

      > .link {
        color: var(--white);
        transition: color 0.2s;

        &.active, &:hover {
          color: var(--primary);
        }
      }
    }
  }
`;

export default Breadcrumb;