import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, Title } from '@components/common';

const SubVisual = ({ title = '타이틀 부분 입니다.', bg, ...props }) => {
  return (
    <SubVisualStyle bg={bg} {...props}>
      <Flex className="common-sub-visual-inner" justifyContent="center" alignItems="center">
        <Title className="common-sub-visual-title" level={2} color="white" bold>{title}</Title>
      </Flex>
    </SubVisualStyle>
  );
};

SubVisual.propTypes = {
  /** 제목 */
  title: PropTypes.string,
  /** 배경 이미지 url */
  bg: PropTypes.string,
};

const SubVisualStyle = styled.article`
  height: 400px;
  background: var(--grey500) center/cover no-repeat;

  ${({ bg }) => bg && `background-image: url(${bg});`}

  .common-sub-visual {}
`;

export default SubVisual;