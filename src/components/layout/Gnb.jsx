import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components';

import { Text, Flex } from '@components/common';
import { subSitemap } from '@utils/sitemap';
import usePathInfo from '@hooks/usePathInfo';

const Gnb = ({ type, ...props }) => {
  const pathInfo = usePathInfo();

  const isDepth1Active = useCallback((depth1) => {
    return depth1 === pathInfo?.depth1;
  }, [pathInfo]);
  
  const isDepth2Active = useCallback((depth1, depth2) => {
    return depth1 === pathInfo?.depth1 && depth2 === pathInfo?.depth2;
  }, [pathInfo]);

  return (
    <GnbStyle type={type} {...props}>
      <Flex className="depth1-list" as="ul">
        {subSitemap.map((v1, i1) => (
          <li key={v1.en} className={`list-item ${isDepth1Active(v1.en) ? 'active' : ''}`}>
            <Link href={`/${v1.en}/${v1.depth2[0].en}`} title={v1.kr}>
              <Flex as="span" justifyContent="center" alignItems="center">
                <Text size="small" bold>{v1.kr}</Text>
              </Flex>
            </Link>
            <ul className="depth2-list">
              {v1.depth2.map((v2, i2) => (
                <li key={v2.en} className={`list-item ${isDepth2Active(v1.en, v2.en) ? 'active' : ''}`}>
                  <Link href={`/${v1.en}/${v2.en}`} title={v2.kr}>
                    <Text size="small">{v2.kr}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </Flex>
    </GnbStyle>
  );
};

Gnb.propTypes = {
  type: PropTypes.oneOf(['dark', 'white']),
};

const GnbStyle = styled.nav`
  &:hover {
    .depth2-list {
      display: block;
    }
  }

  .depth1-list {
    text-align: center;

    > .list-item {
      > a {
        display: block;
        height: var(--header-height);
        padding: 0 45px;
        color: ${({ type }) => type === 'dark' ? 'var(--grey800)' : 'var(--white)'};
        transition: color 0.2s;
      }

      &:hover, &.active {
        > a {
          color: var(--primary);
        }
      }

      &:first-child {
        width: 121px;
      }
    }
  }

  .depth2-list {
    display: none;
    padding: 15px 0 19px;

    > .list-item {
      margin-bottom: 15px;
      
      &:hover, &.active {
        a {
          color: var(--primary);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      > a {
        display: inline-block;
        color: ${({ type }) => type === 'dark' ? 'var(--grey700)' : 'var(--white)'};
        transition: color 0.2s;
      }
    }
  }
`;

export default Gnb;