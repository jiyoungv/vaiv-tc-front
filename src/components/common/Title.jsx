import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { colorVariable } from '@styles/Variable';
import { titleVariant } from '@styles/Mixin';

const Title = ({ level = 1, color, mg, pd, children, ...props }) => {
  const as = useMemo(() => {
    if (level === 1) return 'h1';
    else if (level === 2) return 'h2';
    else if (level === 3) return 'h3';
    else if (level === 4) return 'h4';
    else if (level === 5) return 'h5';
    else if (level === 6) return 'h6';
  }, [level]);

  return (
    <TitleStyle as={as} mg={mg} pd={pd} color={color} {...props}>
      {children}
    </TitleStyle>
  );
};

Title.propTypes = {
  /** 레벨. 레벨에 맞춰서 크기 및 heading 태그로 변환 (e.g. 1은 h1, 2는 h2...) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** 색. 정해진 변수를 넣는다 */
  color: PropTypes.oneOf(colorVariable),
  /** 굵기 */
  bold: PropTypes.bool,
  /** 내용. bold를 부분적으로 주고 싶으면 b 태그로 감싸기 */
  children: PropTypes.node,
  /** 마진 */
  mg: PropTypes.string,
  /** 패딩 */
  pd: PropTypes.string,
};

const TitleStyle = styled.h1`
  ${({ mg }) => mg && `margin: ${mg};`}
  ${({ pd }) => pd && `padding: ${pd};`}
  ${({ color }) => color && `color: var(--${color});`}
  ${({ as }) => titleVariant(as)}
  ${({ bold }) => bold && `font-weight: 700;`}
`;

export default Title;