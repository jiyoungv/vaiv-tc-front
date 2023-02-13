import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '@components/common';

const Callout = ({ title, list, children, ...props }) => {
  return (
    <CalloutStyle {...props}>
      {title && <Text className="common-callout-title" color="grey600" mg="0 0 10px" bold>{title}</Text>}
      {list && (
        <ul className="common-callout-list">
          {list?.map((v, i) => (
            <li key={i} className="common-callout-list-item">
              <Text className="common-callout-list-text" size="small" color="grey600">{v}</Text>
            </li>
          ))}
        </ul>
      )}
      {children}
    </CalloutStyle>
  );
};

Callout.propTypes = {
  /** 제목 */
  title: PropTypes.string,
  /** 리스트 */
  list: PropTypes.arrayOf(PropTypes.node),
  /** 그 외 내용 */
  children: PropTypes.node,
};

const CalloutStyle = styled.article`
  padding: 20px;
  border-radius: var(--radius2);
  background: var(--grey100);

  .common-callout {
    &-list-item {
      position: relative;
      padding-left: calc(9px + 4px + 9px);
  
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: calc(22px / 2);
        left: 9px;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--grey600);
      }
    }
  
    &-list-text {
      b {
        color: var(--grey700);
      }
    }
  }
`;

export default Callout;