import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text, Flex } from '@components/common';

const HeaderMember = ({ type = 'dark', ...props }) => {
  const isLoggedIn = true;

  return (
    <HeaderMemberStyle type={type} {...props}>
      <Flex as="ul" alignItems="center">
        {isLoggedIn
          ? (
            <>
              <li className="list-item">
                <Link href="/my/info" title="마이페이지">
                  <Text size="xsmall">마이페이지</Text>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/logout" title="로그아웃">
                  <Text size="xsmall">로그아웃</Text>
                </Link>
              </li>
            </>
          )
          : (
            <>
              <li className="list-item">
                <Link href="/login" title="로그인">
                  <Text size="xsmall">로그인</Text>
                </Link>
              </li>
              <li className="list-item">
                <Link href="/signup" title="회원가입">
                  <Text size="xsmall">회원가입</Text>
                </Link>
              </li>
            </>
          )
        }
      </Flex>
    </HeaderMemberStyle>
  );
};

HeaderMember.propTypes = {
  type: PropTypes.oneOf(['dark', 'white']),
};

const HeaderMemberStyle = styled.div`
  height: var(--header-height);

  .list-item {
    position: relative;
    padding: 0 15px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 12px;
      background: ${({ type }) => type === 'dark' ? 'var(--grey500)' : 'var(--grey600)'};
    } 

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;

      &::after {
        display: none;
      }
    }

    > a {
      display: block;
      color: ${({ type }) => type === 'dark' ? 'var(--grey700)' : 'var(--grey100)'};
      transition: color 0.2s;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export default HeaderMember;