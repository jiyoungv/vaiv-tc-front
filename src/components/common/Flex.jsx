import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = ({ as, direction, justifyContent, alignItems, gap, wrap, mg, pd, inline, children, ...props }) => {
  return (
    <FlexStyle 
      as={as} 
      direction={direction} 
      justifyContent={justifyContent} 
      alignItems={alignItems} 
      gap={gap} 
      mg={mg} 
      pd={pd} 
      inline={inline} 
      wrap={wrap} 
      {...props}
    >
      {children}
    </FlexStyle>
  );
};

Flex.propTypes = {
  /** 다른 태그로 변환 */
  as: PropTypes.string,
  /** 방향 */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /** 수평 정렬 */
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  /** 수직 정렬 */
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline']),
  /** 내부 간격 */
  gap: PropTypes.string,
  /** 래핑 */
  wrap: PropTypes.string,
  /** 마진 */
  mg: PropTypes.string,
  /** 패딩 */
  pd: PropTypes.string,
  /** 인라인 여부 */
  inline: PropTypes.bool,
  /** 내용 */
  children: PropTypes.any,
};

const FlexStyle = styled.div`
  height: inherit;
  ${({ inline }) => inline ? `display: inline-flex;` : `display: flex;`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ mg }) => mg && `margin: ${mg};`}
  ${({ pd }) => pd && `padding: ${pd};`}
`;

export default Flex;