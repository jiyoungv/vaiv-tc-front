import styled from 'styled-components';
import PropTypes from 'prop-types';

import { hidden } from '@styles/Mixin';

const InputRadio = ({ value, name, checked, children, ...props }) => {
  return (
    <InputRadioStyle {...props}>
      <input className="common-input-radio-input" type="radio" id={value} value={value} name={name} checked={checked} />
      <label className="common-input-radio-label" htmlFor={value}>
        <span className="common-input-radio-label-inner">
          {children}
        </span>
      </label>
    </InputRadioStyle>
  );
};

InputRadio.propTypes = {
  /** value. id도 같은 값으로 지정됨 */
  value: PropTypes.string.isRequired,
  /** name. 같은 radio는 같은 name을 가져야됨 */
  name: PropTypes.string.isRequired,
  /** 체크 여부 */
  checked: PropTypes.bool,
  /** 내용. 라벨 텍스트 등을 넣으면 됨 */
  children: PropTypes.node,
};

const localVariable = {
  size: '20px',
  pd: '2px',
};

const InputRadioStyle = styled.span`
  .common-input-radio {
    &-input {
      ${hidden}
    }

    &-label {
      position: relative;
      padding: ${localVariable.pd};
      cursor: pointer;
  
      &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
      }
  
      &::before {
        left: ${localVariable.pd};
        top: 50%;
        transform: translateY(-50%);
        width: ${localVariable.size};
        height: ${localVariable.size};
        border: 2px solid var(--grey400);
      }
  
      &::after {
        display: none;
        left: calc(${localVariable.pd} + ${localVariable.size} / 2);
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(${localVariable.size} / 2);
        height: calc(${localVariable.size} / 2);
        background: var(--primary);
      }
  
    }

    &-label-inner {
      padding-left: calc(${localVariable.size} + ${localVariable.pd} * 2);
    }
  
    &-input:checked + .common-input-radio-label {
      &::before {
        border-color: var(--primary);
      }
  
      &::after {
        display: block;
      }
    } 
  }
`;

export default InputRadio;