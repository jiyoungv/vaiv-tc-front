import { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, Text } from '@components/common';

const Tab = ({ defaultIndex = 0, item, onChange = () => {}, gutter = 60, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const isActiveIndex = useCallback((index) => index === activeIndex, [activeIndex]);

  const onClickTab = useCallback((index) => (e) => {
    setActiveIndex(index);
    onChange(index)
  }, [onChange]);
  
  return (
    <TabStyle gutter={gutter} {...props}>
      <Flex className="common-tab-label-list" as="ul">
        {item?.map((v, i) => (
          <li key={i} className={`common-tab-label-item ${isActiveIndex(i) ? 'active' : ''}`} onClick={onClickTab(i)}>
            <Text className="common-tab-label-text" bold={isActiveIndex(i)}>
              {v.label ? v.label : v}
            </Text>
          </li>
        ))}
      </Flex>
      {item[activeIndex]?.content && (
        <div className="common-tab-content">
          {item[activeIndex].content}
        </div>
      )}
    </TabStyle>
  );
};

Tab.propTypes = {
  /** 로딩 시 보여줄 인덱스 */
  defaultIndex: PropTypes.number,
  /** 탭 아이템 */
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        content: PropTypes.any,
      })
    ),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  /** handler */
  onChange: PropTypes.func,
  /** 탭의 라벨과 컨텐츠 사이 간격 */
  gutter: PropTypes.number,
};

const TabStyle = styled.article`
  .common-tab {
    &-label-list {
      margin-bottom: ${({ gutter }) => gutter && `${gutter}px`};
      border-bottom: 1px solid var(--grey300);
    }

    &-label-item {
      position: relative;
      min-width: 100px;
      padding: 7px;
      color: var(--grey500);
      text-align: center;
      cursor: pointer;

      &::after {
        content: '';
        display: none;
        z-index: 5;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 3px;
        background: var(--primary);
      }

      &.active {
        color: var(--primary);

        &::after {
          display: block;
        }
      }
    }
  }
`;

export default Tab;