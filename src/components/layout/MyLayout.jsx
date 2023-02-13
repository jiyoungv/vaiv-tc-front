import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Inner, Title, Text, Flex } from '@components/common';
import { AppLayout } from '@components/layout';
import { mySitemap } from '@utils/sitemap';
import usePathInfo from '@hooks/usePathInfo';

const MyLayout = ({ children, ...props }) => {
  const pathInfo = usePathInfo();

  return (
    <AppLayout>
      <MyLayoutStyle {...props}>
        <Inner>
          <Title className="title" level={4} color="grey800" bold>마이페이지</Title>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <ul className="lnb-list">
              {mySitemap.filter(v => v.en === 'my')[0].depth2.map((v, i) => (
                <li key={v.en} className={`list-item ${v.en === pathInfo.depth2 ? 'active' : ''}`}>
                  <Link className={'list-link'} href={`/my/${v.en}`} title={v.kr}>
                    <Text className={'list-text'}>{v.kr}</Text>
                  </Link>
                </li>
              ))}
            </ul>
            <div id="content">
              {children}
            </div>
          </Flex>
        </Inner>
      </MyLayoutStyle>
    </AppLayout>
  );
};

MyLayout.propTypes = {
  children: PropTypes.node,
};

const MyLayoutStyle = styled.div`
  padding: calc(50px + var(--header-height)) 0 120px;

  .title {
    margin-bottom: 50px;
  }

  .lnb-list {
    width: 170px;
    
    .list-item {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        border-bottom: 2px solid var(--grey700);

        .list-link {
          color: var(--grey700);
          font-weight: 700;
        }
      }
    }

    .list-link {
      display: inline-block;
      padding: 7px 10px;
      color: var(--grey600);

      &:hover {
        font-weight: 700;
      }
    }
  }

  #content {
    width: calc(100% - 170px - 45px);
  }
`;

export default MyLayout;