import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Text } from '@components/common';
import { lnbListState } from '@states/index';
import useWindowScroll from '@hooks/useWindowScroll';

const Lnb = () => {
  const router = useRouter();
  const windowScroll = useWindowScroll();

  const lnbList = useRecoilValue(lnbListState);
  const [lnbListArr, setLnbListArr] = useState([]);

  // map으로 된 lnbList를 array로 변환
  useEffect(() => {
    const newLnbListArr = [];

    for (let value of lnbList.values()) {
      newLnbListArr.push(value);
    }

    setLnbListArr(newLnbListArr);

    return () => {
      setLnbListArr([]);
    }
  }, [lnbList]);

  const [activeIndex, setActiveIndex] = useState(0);

  // 스크롤 위치에 따라 activeIndex 변경
  useEffect(() => {
    if (!lnbListArr) return;

    for (let i = 0; i < lnbListArr?.length; i++) {
      if (i === 0) { // 처음
        if (windowScroll?.y < lnbListArr[i + 1]?.scrollY) { // 다음 포인트 미만
          setActiveIndex(i);
        }
      } else if (i === lnbListArr.length - 1) { // 끝
        if (windowScroll?.y >= lnbListArr[i]?.scrollY || windowScroll?.y >= document?.body?.scrollHeight - window?.innerHeight - 5) { // 마지막 포인트 이상 || 화면 끝부분
          setActiveIndex(i);
        }
      } else if (windowScroll?.y >= lnbListArr[i]?.scrollY && windowScroll?.y < lnbListArr[i + 1]?.scrollY) { // 현재 포인트 이상, 다음 포인트 미만
        setActiveIndex(i);
      }
    }
    
    return () => {
      setActiveIndex(0);
    }
  }, [windowScroll, lnbListArr]);

  return (
    <LnbStyle>
      {lnbListArr?.map((v, i) => (
        <li key={v.id} className={activeIndex === i ? 'active' : ''}>
          <Link className="link" href={`${router.pathname}/#${v.id}`} scroll={false}>
            <Text className="text" size={v.fontSize ? v.fontSize : 'base'}>{v.text}</Text>
          </Link>
        </li>
      ))}
    </LnbStyle>
  );
};

const LnbStyle = styled.ul`
  position: sticky;
  top: calc(var(--header-height) + 50px);
  left: 0;
  width: 200px;
  padding-right: 30px;

  > li {
    display: flex;
    align-items: center;
    gap: 0 10px;
    margin-bottom: 15px;
    transition: font-weight 0.3s;

    &::after {
      content: '';
      flex-grow: 1;
      opacity: 0;
      height: 2px;
      background: var(--grey600);
      transition: opacity 0.3s;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      font-weight: 700;
    }

    &.active {
      font-weight: 700;

      &::after {
        opacity: 1;
      }
    }

    .link {
      color: var(--grey600);
    }
  }
`;

export default Lnb;