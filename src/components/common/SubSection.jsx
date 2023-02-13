import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubSection = styled.section`
  ${({ mg }) => mg ? `margin: ${mg};` : 'margin: 0 0 110px;'}
`;

SubSection.propTypes = {
  /** 마진 수정. 디폴트는 '0 0 110px' */
  mg: PropTypes.string,
};

export default SubSection;