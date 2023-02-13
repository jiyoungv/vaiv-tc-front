import PropTypes from 'prop-types';
import styled from 'styled-components'

import { colorVariable, textSizeVariable } from '@styles/Variable';
import { textVariant } from '@styles/Mixin';

const Text = ({ size = 'base', color, inline, mg, pd, children, ...props }) => {
  return (
    <TextStyle as={inline ? 'span' : ''} size={size} color={color} mg={mg} pd={pd} {...props}>
      {children}
    </TextStyle>
  );
};

Text.propTypes = {
  /** 크기 */
  size: PropTypes.oneOf(textSizeVariable),
  /** 색. 정해진 변수를 넣는다 */
  color: PropTypes.oneOf(colorVariable),
  /** 굵기 */
  bold: PropTypes.bool,
  /** 인라인 여부 */
  inline: PropTypes.bool,
  /** 마진 */
  mg: PropTypes.string,
  /** 패딩 */
  pd: PropTypes.string,
  /** 내용. bold를 부분적으로 주고 싶으면 b 태그로 감싸기 */
  children: PropTypes.node,
};

const TextStyle = styled.p`
  ${({ mg }) => mg && `margin: ${mg};`}
  ${({ pd }) => pd && `padding: ${pd};`}
  ${({ size }) => textVariant(size)}
  ${({ color }) => color && `color: var(--${color});`}
  ${({ bold }) => bold && `font-weight: 700;`}
`;

export default Text;