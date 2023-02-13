import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BoardTitle, Text, Flex } from '@components/common';
import { isEmptyData } from '@utils/func';

const BoardList = ({ data, ...props }) => {
  if (isEmptyData(data)) {
    return (
      <BoardListStyle {...props}>
        <Flex justifyContent="center">
          <Text color="grey500" mg="50px 0">게시물이 존재하지 않습니다.</Text>
        </Flex>
      </BoardListStyle>
    );
  }

  return (
    <BoardListStyle {...props}>
      {data?.map((v, i) => (
        <BoardTitle key={i} className="common-board-list-title" data={v} as="li" link />
      ))}
    </BoardListStyle>
  );
};

BoardList.propTypes = {
  /** 데이터 */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      sort: PropTypes.number,
      url: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
};

const BoardListStyle = styled.ul`
  .common-board-list {}
`;

export default BoardList;