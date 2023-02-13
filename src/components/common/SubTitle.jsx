import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Title, Text } from '@components/common';

const SubTitle = ({ title = '타이틀입니다.', text, mg = '0 0 60px', children, ...props}) => {
  return (
    <SubTitleStyle mg={mg} {...props}>
      <Title className="common-sub-title-title" level={4} color="grey800" bold>{title}</Title>
      {text && <Text className="common-sub-title-text" size="middle" color="grey700" mg="5px 0 0">{text}</Text>}
      {children}
    </SubTitleStyle>
  );
};

SubTitle.propTypes = {
  /** 타이틀 */
  title: PropTypes.node.isRequired,
  /** 텍스트 */
  text: PropTypes.node,
  /** 마진 */
  mg: PropTypes.string,
  /* 그외 내용 */
  children: PropTypes.node,
};

const SubTitleStyle = styled.section`
  text-align: center;

  ${({ mg }) => mg && `margin: ${mg};`}

  .common-sub-title {}
`;

export default SubTitle;