import { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

import { Text, Flex } from '@components/common';
import { scrollbarStyle } from '@styles/Mixin';

const Select = ({ 
  option, 
  defaultValue = option[0]?.value, 
  onChange = () => {}, 
  size = 'small', 
  theme = 'light',
  readOnly,
  disabled,
  width,
  height,
  bold, 
  ...props 
}) => {
  const optionListRef = useRef(null);
  
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const [openOptionList, setOpenOptionList] = useState(false);

  const onClickSelected = useCallback(() => {
    if (disabled) return;
    if (readOnly) return;
  
    setOpenOptionList(prev => !prev);
  }, [disabled, readOnly]);

  // 외부 클릭시 옵션 리스트 close
  useEffect(() => {
    const handler = (e) => {
      if (!optionListRef?.current?.contains(e.target)) {
        setOpenOptionList(false);
      }
    };

    if (openOptionList) document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, [openOptionList, optionListRef]);

  const onClickOptionItem = useCallback((option, disabled) => (e) => {
    if (disabled) return;

    setSelectedOption(option);
    onChange(option);
    setOpenOptionList(false);
  }, [onChange]);

  return (
    <SelectStyle 
      size={size}
      theme={theme}
      readOnly={readOnly}
      disabled={disabled}
      width={width}
      height={height}
      {...props} 
    >
      <Flex className={`common-select-selected ${openOptionList ? 'open' : ''}`} alignItems="center" onClick={onClickSelected}>
        <Text className="common-select-selected-text" size={size === 'small' ? 'xsmall' : 'small'} bold={bold}>
          {option?.filter(v => v.value === selectedOption)[0]?.label}
        </Text>
        <RiArrowDownSLine className="common-select-selected-arrow" size={size === 'small' ? 20 : 24} />
      </Flex>
      {openOptionList && (
        <>
          <div className="common-select-dummy"></div>
          <ul className="common-select-option-list" ref={optionListRef}>
            {option?.map((v, i) => (
              <li 
                key={v.value} 
                className={`common-select-option-item ${v.value === selectedOption ? 'active' : ''} ${v.disabled ? 'disabled' : ''}`} 
                onClick={onClickOptionItem(v.value, v.disabled)} 
                title={v.label}
              >
                <Text className="common-select-option-text" size="small">{v.label}</Text>
              </li>
            ))}
          </ul>
        </>
      )}
    </SelectStyle>
  );
};

Select.propTypes = {
  /** 옵션 */
  option: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool, 
    }),
  ).isRequired,
  /** 초기 선택값 */
  defaultValue: PropTypes.string,
  /** 핸들러 */
  onChange: PropTypes.func,
  /** 크기 */
  size: PropTypes.oneOf(['small', 'large']),
  /** 테마 */
  theme: PropTypes.oneOf(['light', 'dark']),
  /** 읽기 전용 여부 */
  readOnly: PropTypes.bool,
  /** 활성화 여부 */
  disabled: PropTypes.bool,
  /** 셀렉트 최소 너비 */
  width: PropTypes.string,
  /** 옵션 리스트 최대 높이 */
  height: PropTypes.string,
  /** 볼드 여부 */
  bold: PropTypes.bool,
};

const optionListAni = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0.5) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: scaleY(1) translateX(-50%);
  }
`;

const SelectStyle = styled.div`
  display: inline-block;
  position: relative;

  .common-select {
    &-selected {
      height: 100%;
      border-radius: var(--radius1);
      cursor: pointer;
    
      &.open {
        border-color: var(--primary) !important;
  
        &-selected-arrow { 
          transform: translateY(-50%) rotate(-180deg);
        }
      }
  
      ${({ width }) => width && `width: ${width};`}
    }

    &-selected-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.2s;
    }
  
    &-dummy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  
    &-option-list {
      ${scrollbarStyle()};
      z-index: var(--zindex3);
      overflow-y: auto;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      min-width: 100%;
      margin-top: 1px;
      padding: 4px;
      border-radius: var(--radius1);
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
      transform-origin: center top;
      animation: ${optionListAni} 0.2s;
  
      ${({ height }) => height && `max-height: ${height};`}
    }

    &-option-item {
      padding: 5px 12px;
      border-radius: var(--radius1);
      cursor: pointer;

      &.disabled {
        cursor: not-allowed;
      }
    }

    ${({ size }) => {
      if (size === 'small') {
        return `
          &-selected {
            padding: 3.5px 9px;
          }

          &-selected-text {
            margin-right: 50px;
          }

          &-selected-arrow {
            right: 9px;
          }
        `
      } else if (size === 'large') {
        return `
          &-selected {
            padding: 9px 14px 11px;
          }

          &-selected-text {
            margin-right: 86px;
          }

          &-selected-arrow {
            right: 14px;
          }
        `
      }
    }}
  
    ${({ theme }) => {
      if (theme === 'light') {
        return `
          &-selected {
            border: 1px solid var(--grey300);
            background: var(--white);
          }

          &-selected-text, &-selected-arrow {
            color: var(--grey700);
          }

          &-option-list {
            background: var(--white);
          }

          &-option-item {
            &:not(.disabled):hover {
              background: var(--grey200);
            }

            &:not(.disabled).active {
              background: var(--primary-light1);
            }

            &.disabled {
              .common-select-option-text {
                color: var(--grey300);
              }
            }
          }

          &-option-text {
            color: var(--grey700);
          }
        `
      } else if (theme === 'dark') {
        return `
          &-selected {
            border: 1px solid var(--grey800);
            background: var(--grey800);
          }

          &-selected-text, &-selected-arrow {
            color: var(--grey400);
          }

          &-option-list { 
            background: var(--grey800);
          }

          &-option-item {
            &:not(.disabled):hover {
              background: var(--grey700);

              .common-select-option-text {
                color: var(--white);
              }
            }

            &:not(.disabled).active {
              background: var(--primary-dark1);

              .common-select-option-text {
                color: var(--white);
              }
            }

            &.disabled {
              .common-select-option-text {
                color: var(--grey700);
              }
            }
          }

          &-option-text {
            color: var(--grey400);
          }
        `
      }
    }}

    ${({ readOnly }) => readOnly && `
      &-selected {
        border-color: var(--grey100);
        background: var(--grey100);
        cursor: text;
      }
      
      &-selected-arrow {
        color: var(--grey400);
      }
    `}

    ${({ disabled }) => disabled && `
      &-selected {
        border-color: var(--grey100);
        background: var(--grey100);
        cursor: not-allowed;
      }

      &-selected-text {
        color: var(--grey400);
      }
      
      &-selected-arrow {
        color: var(--grey400);
      }
    `}
  }
`;

export default Select;