import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Text, Flex } from '@components/common';
import { textEllipsis } from '@styles/Mixin';
import { useMemo } from 'react';

const defaultData = { 
  number: 1,
  sort: 0, 
  title: '공지사항 제목', 
  content: '공지사항 내용',
  date: '2022-11-16',
};

const BoardTitle = ({ data = defaultData, link, ...props }) => {
  const item = useMemo(() => (
    <>
      <Flex className="common-board-title-left" alignItems="center">
        {data.sort === 0 
          ? <Text className="common-board-title-label" color="primary" bold>[공지사항]</Text>
          : <Text className="common-board-title-label" color="purple" bold>[이벤트]</Text>
        }
        <Text className="common-board-title-title" color="grey700" size="large" bold>{data.title}</Text>
      </Flex>
      <Text className="common-board-title-date" color="grey500" bold>[{data.date}]</Text>
    </>
  ), [data]);

  return (
    <BoardTitleStyle {...props}>
      {link
        ? (
          <Link className="common-board-title-link" href={`/notice/${data.number}`} title={data.title}>
            <Flex className="common-board-title-link-inner" justifyContent="space-between" alignItems="center">
              {item}
            </Flex>
          </Link>
        )
        : (
          <Flex className="common-board-title-item" justifyContent="space-between" alignItems="center">
            {item}
          </Flex>
        )
      }
    </BoardTitleStyle>
  );
};

BoardTitle.propTypes = {
  /** 데이터 */
  data: PropTypes.shape({
    sort: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }),
  /** 링크 여부 */
  link: PropTypes.bool,
};

const BoardTitleStyle = styled.div`
  border-bottom: 1px solid var(--grey300);

  &:first-child {
    .common-board-title-link, .common-board-title-item {
      padding-top: 0;
    }
  }
  
  .common-board-title {
    &-link, &-item {
      padding: 30px 0;
    }

    &-link {
      display: block;  
    }

    &-left {
      max-width: calc(100% - 140px);
    }
  
    &-label {
      flex-shrink: 0;
      width: 75px;
      margin-right: 30px;
    }
  
    &-title {
      ${textEllipsis()}
      max-width: calc(100% - 75px);
    }
  
    &-date {
      flex-shrink: 0;
    }
  }
`

export default BoardTitle;